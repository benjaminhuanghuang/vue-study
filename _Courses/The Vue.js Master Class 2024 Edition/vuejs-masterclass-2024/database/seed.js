import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

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
        name:name,
        slug: name.toLowerCase().replace(/ /g, '-'),
        status: faker.helpers.arrayElement(['in-progress', 'completed']),
        collaborators: faker.helpers.arrayElements([1, 2, 3]),
    });
}
await seedProjects()
