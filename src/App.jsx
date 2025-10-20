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
      <div className="p-9 rounded-3xl shadow-lg bg-blue-100">
        <header>
            <h1 className="text-3xl font-bold flex items-center justify-center">Habit Tracker</h1>
        </header>
      </div>

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
        <div className="p-2 rounded-2xl shadow-lg bg-sky-200">
            <h2>Habit List: </h2>
            {habits.map((habit) => (
                <HabitListItem habit={habit} />
            ))}
        </div>
    );
}

function HabitListItem({ habit }) {
    return (
        <div className="p-2 rounded-2xl shadow-lg bg-sky-200">
            <p>{habit.title}</p>
        </div>
    );
}