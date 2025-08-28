import React, { useEffect,useRef } from 'react'

const AccessDomHeight = () => {
    let divRef=useRef(null);

    useEffect(()=>{
     console.log(divRef.current.offsetHeight)   
    },[])
  return (
    <div ref={divRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum et dignissimos optio nisi laborum expedita! Recusandae aspernatur quaerat quas blanditiis dolorem. Velit totam ea laborum quod, unde magni repudiandae.
        Quaerat, architecto. Voluptate fugiat sed, est cum ipsa tempora modi fuga numquam deleniti possimus nulla explicabo illum, dignissimos magni nisi vitae aspernatur repellendus! Quaerat repudiandae commodi quae nulla alias iusto.
        Alias officiis aut distinctio quas dolores eum provident qui libero molestiae voluptatem illum rem sit sint consectetur aliquid porro amet, aliquam recusandae placeat numquam modi saepe. Autem dolore pariatur quas.
        Libero adipisci omnis, blanditiis aliquam dolorum impedit nulla tempora asperiores quidem exercitationem eum possimus maxime eius error alias enim quod. Quis nihil iure quae cupiditate quasi, earum nulla inventore illo.
        Rerum iste officia voluptate sequi quo accusamus exercitationem ratione vero odio veritatis minus, adipisci fugit, iure at sit quis modi dolor soluta accusantium eveniet nulla dolorem tenetur omnis? Est, possimus?
    </div>
  )
}

export default AccessDomHeight