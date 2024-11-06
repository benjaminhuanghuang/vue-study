it('Test vue component ', () => {
  // is subcomponent loaded
  expect(wrapper.findComponent(SectionTitle).exists()).toBeTruthy();

  // check property valud of the component  
  expect(wrapper.findComponent(SectionTitle).props().title).toBe("Hello");

  // all fields are displayed
  expect(wrapper.findAllComponents(SectionRow)).toHaveLength(Object.keys(MockBatchJobDetail).length);

  // field label
  expect(wrapper.findAllComponents(SectionRow).at(0).props().label).toBe('Job ID');

  // filed value
  expect(wrapper.findAllComponents(SectionRow).at(7).props().value).toBe(MockBatchJobDetail.endTime);
});

it('displays the link correctly ', () => {
  // title
  const secondRow = expect(wrapper.findComponent(SectionTitle).props().title).toBe('Batch Details');
  // rows
  expect(wrapper.findAllComponents(RadiusDataTableRow)).toHaveLength(MockBatchJobs.length + 1);

  // row 1 is  a link
  const row1 = wrapper.findAllComponents(RadiusDataTableRow).at(1);
  expect(row1.findAllComponents(AnchorLinkCell).exists()).toBeTruthy();

  // row 2 is not a link
  const row2 = wrapper.findAllComponents(RadiusDataTableRow).at(2);
  expect(row2.findAllComponents(AnchorLinkCell).exists()).toBeFalsy();
});

// Test the event
it('toggle RadiusAccordion', async () => {
  expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeFalsy();
  await wrapper.findAll('.c-radius-accordion__button').at(0).trigger('click');
  expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeTruthy();
  await wrapper.findAll('.c-radius-accordion__button').at(0).trigger('click');
  expect(wrapper.findAllComponents(RadiusAccordion).at(0).props().open).toBeFalsy();
});

it('Should emit event', async () => {
  // row 1 is  a link
  const row1 = wrapper.findAllComponents(RadiusDataTableRow).at(1);
  const link = row1.findComponent(AnchorLinkCell);
  await link.trigger('click');

  // view status changed
  expect(wrapper.emitted().jobClick);
});