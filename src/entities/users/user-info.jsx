const Greetings = ({ name }) => <h2>Hello {name}</h2>

export const ShowUserInfo = () => {
    
  const user = {
    name: 'John Doe',
    age: 27,
    jobTitle: 'React Developer',
  }

  return (
    <div className="App">
      <h1>Interface Segregation Principle</h1>
      <Greetings user={user.name} />
    </div>
  )
}