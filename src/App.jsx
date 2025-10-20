import data from './data.json';
import { useState } from 'react';
function App() {
    const [habits, setHabits] = useState(data);
    return (
        <>
            <Header />
            <Form setHabits={setHabits} />
            <HabitList habits={habits} />
        </>
    );
}

export default App;

function Header() {
    return (
        <header>
            <h1>Habit Tracker</h1>
        </header>
    );
}

function Form({ setHabits }) {
    const [formState, setFormState] = useState('');

    function handleChange(e) {
        setFormState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setHabits((prev) => [...prev, { title: formState }]);
        setFormState('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className='input'>
                <input
                    onChange={handleChange}
                    type='text'
                    id='title'
                    name='title'
                    value={formState}
                    className='grow'
                    placeholder='title'
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

function HabitList({ habits }) {
    return (
        <div>
            <h2>Habit List</h2>
            {habits.map((habit) => (
                <HabitListItem habit={habit} />
            ))}
        </div>
    );
}

function HabitListItem({ habit }) {
    return (
        <div>
            <p>{habit.title}</p>
        </div>
    );
}