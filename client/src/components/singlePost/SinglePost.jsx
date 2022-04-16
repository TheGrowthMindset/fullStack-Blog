import './singlePost.css';

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Kwasi</b>
                </span>
                <span className="singlePostDate">
                    1 hour Ago
                </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, cum quia. At tempora magnam culpa nam ratione, molestiae eius vel laboriosam, rerum doloremque consectetur porro animi vitae inventore. Modi dignissimos tempora quaerat inventore excepturi ad, repellendus, soluta nihil quasi quis perspiciatis dolores praesentium mollitia at animi nesciunt accusamus maxime sint fugiat esse ut. Sit ipsam facere, obcaecati laborum sunt magni autem velit voluptate tempora tenetur veritatis eius eligendi dolor quis amet quam illum dicta itaque culpa? Eius sed animi eligendi iusto? Nesciunt veniam sunt, tempora itaque quaerat quas doloribus id debitis dolorum doloremque aliquid beatae odit ex, earum dolorem delectus perspiciatis maiores eligendi corporis. Velit, voluptates. Voluptate quasi ducimus itaque maiores, ex voluptates, cum doloribus libero nesciunt saepe doloremque molestiae quibusdam dolores quos magni iusto ab exercitationem debitis! Inventore ipsa, illo numquam alias, nobis nisi assumenda expedita laboriosam, veritatis quis ipsum nostrum neque explicabo porro repudiandae tenetur vitae magni magnam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis tempore, eaque natus laudantium vitae quos laborum. Quasi dolore, quia minima voluptatem culpa necessitatibus vitae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia aspernatur praesentium delectus adipisci quis temporibus, hic ea facilis, nemo harum pariatur quam quod aut!
            </p>
        </div>
    </div>
  )
}

export default SinglePost