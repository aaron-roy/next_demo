import Calculator from '/comps/Calculator.js'
import Link from 'next/link'




const projects = () => {
    return (

        <div>
            <h1>Projects</h1>
            <ul>
                <li>
                    <Link href="/projects/calc">
                        <h2>Calculator</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/hooks">
                        <h2>Hooks</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/NBA">
                        <h2>NBA</h2>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/NBA_Dynamic">
                        <h2>NBA Search</h2>
                    </Link>
                </li>
                
            </ul>

        </div>
    );
}

export default projects;