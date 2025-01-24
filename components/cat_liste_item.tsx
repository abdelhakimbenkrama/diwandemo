import Link from 'next/link'
import React from 'react'

function cat_liste_item({category}:any) {
  return (
    <div>
      <Link href={'/wordPerCat/'+category.cat_id}>{category.cat_name}</Link>
    </div>
  )
}

export default cat_liste_item
