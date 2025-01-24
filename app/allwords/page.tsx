  "use client";
  import Word_liste_item from '@/components/word_liste_item';
  import supabase from '@/lib/supabase';
  import React, { useEffect, useState } from 'react'

  function page() {

    



  const [fetcherror , setFetchError] = useState<string | null>(null);
  const [allWords , SetAllWords] = useState<any[] | null>(null);

  useEffect(()=>{
    const fetchOneWord = async ()=> {

        const {data, error} = await supabase
        .from('words')
        .select('*')

        if(error){ 
            setFetchError('Error ');
            SetAllWords(null);
            console.log(error)

        }
        if(data){
            SetAllWords(data);
            console.log(data)
            setFetchError(null)
        }
    }

    fetchOneWord()
  } ,[]);


    return (
      <div >
          {fetcherror && (<p>{fetcherror}</p>)}

          {allWords && (<ul>
              {allWords.map((w)=> (<Word_liste_item word={w} key={w.word_id}/>

                  )
                  )}
          </ul>)}
              </div>
    )
  }

  export default page
