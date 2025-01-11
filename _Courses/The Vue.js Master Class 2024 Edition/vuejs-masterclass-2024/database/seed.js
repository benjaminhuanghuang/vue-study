import { de, fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
import { describe } from 'node:test'

const supabase = createClient(
  process.env.VITE_SUPABASE_APP_URL,
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY
)

// console.log(supabase)

// const seedProjects = async (num) => {
//   const projects = []
//   for (let i = 0; i < num; i++) {
//     const name = faker.lorem.words(3)
//     projects.push({
//       name: name,
//       slug: name.toLowerCase().replace(/ /g, '-'),
//       status: faker.helpers.arrayElement(['in-progress', 'completed']),
//       collaborators: faker.helpers.arrayElements([1, 2, 3])
//     })
//   }
//   console.log(projects)
//   await supabase.from('projects').insert(projects)
// }

// await seedProjects(10)
const seedProjects = async () => {
  const name = faker.lorem.words(3)
  await supabase.from('projects').insert({
    name: name,
    slug: name.toLowerCase().replace(/ /g, '-'),
    description: faker.lorem.paragraph(2),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    collaborators: faker.helpers.arrayElements([1, 2, 3])
  })
}
// await seedProjects()

const seedTasks = async (num, projectIds) => {
  const tasks = []
  for (let i = 0; i < num; i++) {
    tasks.push({
      name: faker.lorem.words(3),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      description: faker.lorem.paragraph(),
      du_data: faker.data.future(),
      project_id: faker.helpers.arrayElement(projectIds),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }
}

const seedDatabase = async (n) => {
  const projIds = await seedProjects(0).map((p) => p.id)

  await seedTasks(n, projIds)
}

// seedDatabase(10)

const seedTask = async (num, projectIds) => {
  const task = {
    name: faker.lorem.words(3),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    description: faker.lorem.paragraph(),
    due_date: faker.date.future(),
    project_id: faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7]),
    collaborators: faker.helpers.arrayElements([1, 2, 3])
  }

  const {data, error} = await supabase.from('tasks').insert(task).select('id');
  console.log("error", error, data) 
}

await seedTask()
