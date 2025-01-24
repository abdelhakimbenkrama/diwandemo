
import Link from 'next/link'
import React from 'react'

function word_liste_item({word}:any) {
  return (
    <div>
      <Link href={'/oneword/'+word.word_id}>{word.word}</Link>
    </div>
  )
}

export default word_liste_item
