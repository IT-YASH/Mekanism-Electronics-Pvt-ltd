import Card from '../components/Card';
import Navbar from '../components/Navbar'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Home = () => {

    const Sort = [
        { value: 'label', label: 'Label  ' },
        { value: 'id', label: 'ID' },
        { value: 'name', label: 'Name' },
        { value: 'hp', label: 'HP' },
        { value: 'attack', label: 'Attack' },
        { value: 'defense', label: 'Defense' },
        { value: 'specialattack', label: 'Special Attack' },
        { value: 'specialdefense', label: 'Special Defense' },
        { value: 'speed', label: 'Speed' },
        { value: 'total', label: 'Total' },
    ];
    const SortBy = [
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Desceding' },
    ];
    const Type = [
        { value: 'bug', label: 'Bug' },
        { value: 'dark', label: 'Dark' },
        { value: 'dragon', label: 'Dragon' },
        { value: 'electric', label: 'Electric' },
        { value: 'fairy', label: 'Fairy' },
        { value: 'fighting', label: 'Fighting' },
        { value: 'fire', label: 'Fire' },
        { value: 'flying', label: 'Flying' },
        { value: 'ghost', label: 'Ghost' },
        { value: 'grass', label: 'Grass' },
        { value: 'ground', label: 'Ground' },
        { value: 'normal', label: 'Normal' },
        { value: 'poison', label: 'Poison' },
        { value: 'pyschic', label: 'Pyschic' },
        { value: 'rock', label: 'Rock' },
        { value: 'steel', label: 'Steel' },
        { value: 'water', label: 'Water' },
    ];

    return (
        <div>
            <Navbar />
            <div className='px-35 pt-10'>

                <div className='flex gap-2 justify-end'>
                    <select id="select" className="border p-1 outline-slate-400 rounded-md text-slate-400" required>
                        <option disabled selected value="">Sort</option>
                        {Sort.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select id="select" className="border p-1 outline-slate-400 rounded-md text-slate-400" required>
                        <option disabled selected value="">Sort By</option>
                        {SortBy.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select id="select" className="border p-1 outline-slate-400 rounded-md text-slate-400" required>
                        <option disabled selected value="">Type</option>
                        {Type.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-wrap'>
                    <Card />
                </div>
                <div className='flex justify-center items-center font-bold'>
                    <h2 className='bg-red-400 p-3 mt-5 text-white rounded-md'>
                        Load More
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home