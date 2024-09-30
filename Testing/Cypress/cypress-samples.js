describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
  it('测试about页', () => {
    //访问about
    cy.visit('about')
    cy.contains('h1', 'This is an about page')
  })
})


describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
  it('测试about页', () => {
    //访问about
    cy.visit('#/about')
    cy.contains('h1', 'This is an about page')
  })
  it('zhifeiji组件',() => {
    //访问根目录
    cy.visit('/')
    cy.contains('#msg','aftermounted')
    cy.get('button').click()//点击button元素
    cy.contains('#msg','click over')
  })
})