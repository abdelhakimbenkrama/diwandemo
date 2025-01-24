"use client";
import supabase from '@/lib/supabase';
import React, { useEffect, useState } from 'react'
import Word_liste_item from '@/components/word_liste_item';

interface Params {
  id: string
}

export default function page({ params }: { params: any }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  console.log(typeof(id))
  const [fetcherror , setFetchError] = useState<string | null>(null);
  const [wordslist , SetWordsList] = useState<any[] | null>(null);

  useEffect(()=>{
    const fetchWordsPerCategorie = async ()=> {

        const {data, error} = await supabase
        .from('words')
        .select('*')
        .eq('cat_id', Number(id));

        if(error){ 
            setFetchError('Error ');
            SetWordsList(null);
            console.log(error)

        }
        if(data){
            SetWordsList(data);
            console.log(data)
            setFetchError(null)
        }
    } 

    fetchWordsPerCategorie()
} ,[]);
  return (
    <div >
{fetcherror && (<p>{fetcherror}</p>)}

{wordslist && (<ul>
    {wordslist.map((w)=> (<Word_liste_item word={w} key={w.word_id}/>

        )
        )}
</ul>)}
    </div>
  )
}
