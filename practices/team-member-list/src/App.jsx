import React from 'react'
import MemberProfile from './components/MemberProfile'

const members = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/9.jpg', 
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/20.jpg', 
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/90.jpg', 
  },
  {
    id: 4,
    name: 'Diana Prince',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/71.jpg',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    id: 6,
    name: 'Mark Gallagher',
    role: 'QA Engineer',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    id: 7,
    name: 'George Lucas',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 8,
    name: 'Hannah Baker',
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
];

const App = () => {
  return (
    <div className='min-h-screen p-6 max-w-screen-xl mx-auto'>
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Team Members List App</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* profile cards */}
        {
          members.map(member => (
          <MemberProfile 
          key={member.id} 
          name={member.name} 
          role={member.role} 
          image={member.image}
          />
          ))
        }
        
      </div>
    </div>
  )
}

export default App