import { ToyPreview } from "./ToyPreview"


export function ToyList({ toys, onRemoveToy, onEditToy }) {
    console.log('toys', toys)


    return (
        <div className="toys-list">
            <ul>
                {toys.map((toy) => (
                    <li key={toy._id}>
                        <ToyPreview toy={toy} />
                        <div>
                            <button onClick={() => onRemoveToy(toy._id)}>x</button>
                            <button onClick={() => onEditToy(toy)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )





}