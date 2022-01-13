import { useState } from "react"

function AddTag() {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  
  const addTags = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag('');
  }

  return (
    <div>
      <div className="tags">
        {tags.map((tag, index) => (
          <div key={index} className="tag">{tag}</div>
        ))}
      </div>

      <form onSubmit={addTags} >
        <input
          type='text'
          placeholder='Add a tag'
          className='add-tag-input'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          />
      </form>
    </div>
  )
}

export default AddTag
