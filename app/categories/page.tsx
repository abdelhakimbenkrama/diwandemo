"use client";
import React, { useEffect, useState } from 'react'
import  supabase  from '@/lib/supabase';
import Cat_liste_item from '@/components/cat_liste_item';


export default function page() {

  const [fetcherror , setFetchError] = useState<string | null>(null);
  const [categorieslist , SetCategoriesList] = useState<any[] | null>(null);

useEffect(()=>{
    const fetchCategories = async ()=> {

        const {data, error} = await supabase
        .from('categories')
        .select('*')

        if(error){ 
            setFetchError('Error ');
            SetCategoriesList(null);
            console.log(error)

        }
        if(data){
            SetCategoriesList(data);
            setFetchError(null)
        }
    }

    fetchCategories()
} ,[]);

  return (
    <div>
      
    {fetcherror && (<p>{fetcherror}</p>)}

    {categorieslist && (<ul>
        {categorieslist.map((cat)=> (<Cat_liste_item category={cat} key={cat.cat_id}/>

            )
            )}
    </ul>)}
    </div>
  )
}



