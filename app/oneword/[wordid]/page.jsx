"use client";
import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase';


export default function page({params}) {
   const resolvedParams = React.use(params);
   const { wordid } = resolvedParams;


  const [fetcherror , setFetchError] = useState(null);
  const [oneWord , SetOneWord] = useState(null);

  useEffect(()=>{
    const fetchOneWord = async ()=> {

        const {data, error} = await supabase
        .from('words')
        .select('*')
        .eq('word_id', Number(wordid));

        if(error){ 
            setFetchError('Error ');
            SetOneWord(null);
            console.log(error)

        }
        if(data){
           SetOneWord(data);
           console.log(data)
            setFetchError(null)
        }
    }

    fetchOneWord()
} ,[]);
  return (
    <div>
      {oneWord && (<div>
        <h1>{oneWord[0].word}</h1>
        <h4>{oneWord[0].word_disc}</h4>
        </div>
      )}
    </div>
  )
}
