export default function Card(props){
    return(
        <div>
           <div>
             <div className="card w-full border rounded-sm mt-5">
                <figure><img src="./public/vite.svg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}