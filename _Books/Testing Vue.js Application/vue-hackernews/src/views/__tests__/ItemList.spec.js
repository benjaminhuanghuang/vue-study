import { shallowMount } from "@vue/test-utils";
import ItemList from "../ItemList.vue";
import Item from "../../components/Item.vue";
import flushPromises from "flush-promises";
import { fetchListData } from "../../api/api";
// when a module imports src/api/api.js, Jest will use 
// api/__mocks__/api.js file
jest.mock("../../api/api.js");

describe("ItemList.vue", () => {
  test("renders an Item with data for each item", async () => {
    expect.assertions(4); //expect 4 assertions to be called

    const mockBar = {
      start: () => {},
      finish: () => {},
    };
    // mock the fetchListData function
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
    fetchListData.mockImplementationOnce(() => Promise.resolve(items));

    const wrapper = shallowMount(ItemList, {
      global: {
        mocks: {
          $bar: mockBar, // Mocking the $bar global property
        },
      },
    });
    await flushPromises();
    const Items = wrapper.findAllComponents(Item);
    expect(Items).toHaveLength(items.length);
    Items.forEach((itemWrapper, i) => {
      expect(itemWrapper.props().item).toEqual(items[i]);
    });
  });

  test("calls $bar start on load", () => {
    const $bar = {
      start: jest.fn(),
      finish: () => {},
    };
    shallowMount(ItemList, {
      global: {
        mocks: {
          $bar, // Mocking the $bar global property
        },
      },
    });
    expect($bar.start).toHaveBeenCalledTimes(1);
  });

  test("calls $bar.finish when load is successful", async () => {
    expect.assertions(1);
    const $bar = {
      start: () => {},
      finish: jest.fn(),
    };
    shallowMount(ItemList, {
      global: {
        mocks: {
          $bar, // Mocking the $bar global property
        },
      },
    });
    await flushPromises();

    expect($bar.finish).toHaveBeenCalled();
  });

  test("calls $bar.fail when load unsuccessful", async () => {
    expect.assertions(1);
    const $bar = {
      start: () => {},
      fail: jest.fn(),
    };
    fetchListData.mockImplementationOnce(() => Promise.reject());  // Failed promise 
    shallowMount(ItemList, {
      global: {
        mocks: {
          $bar, // Mocking the $bar global property
        },
      },
    });
    await flushPromises();

    expect($bar.fail).toHaveBeenCalled();
  });
});
