export default function NewPostComp({ post, dispatch }) {
    return (
        <div className="task">
            <div>
                {post.toggle ? <h3>{post.name}</h3> : <h3>Content is Hidden</h3>}
            </div>
            <button onClick={() => dispatch({ type: "TOGGLE", payload: { id: post.id } })}>
                Toggle
            </button>
        </div>
    );
}
