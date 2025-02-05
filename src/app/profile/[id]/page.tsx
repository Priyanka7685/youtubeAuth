export default function USerProfile({params}: any) {
    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl" >Profile Page</p>
            <span className="p-2 rounded bg-orange-500 text-black" >{params.id}</span>
        </div>
    )
}