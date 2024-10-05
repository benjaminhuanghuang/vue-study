import { useSearch } from "./useSearch";

describe("useSearch", () => {
  it("should return default value of searchTerm and original items", () => {
    const items = [{ name: "1" }, { name: "2" }];
    const { searchTerm, filteredItems } = useSearch(items, ["name"]);

    expect(searchTerm.value).toEqual("");
    expect(filteredItems.value).toEqual(items);
  });

  it("should filter items based on search term", () => {
    const items = [{ name: "1" }, { name: "2" }];
    const { searchTerm, filteredItems, changeSearchTerm } = useSearch(items, ["name"]);

    changeSearchTerm("1");
    expect(searchTerm.value).toEqual("1");
    expect(filteredItems.value).toEqual([{ name: "1" }]);
  });
});
