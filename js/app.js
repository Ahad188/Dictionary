  
    document.getElementById('search-btn').addEventListener('click',function(){
         const inpu = document.getElementById('inp-word');
               let text = inpu.value;
         loadApi(text);
         inpu.value = '';

    })


   const loadApi = (text)=>{
     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayWord(data[0]))
   }

   const displayWord= (data)=>{
      
     const result = document.getElementById('result');
     result.innerText = ' ';
     console.log(data.phonetics[0].audio)
     console.log(data.phonetics[0])
     const div = document.createElement('div')
     div.style.marginTop = "12px";
     div.innerHTML=`
     <button onclick='playaudio("${data.phonetics[0].audio}")'><i class="fas fa-volume-up"></i></button> <br/> <br/>
          <h4>Word :${data.word}</h4> <br/> 
          <h4>Part Of Speech : ${data.meanings[0].partOfSpeech}</h4> <br/>
          <h4>Synonyms: ${data.meanings[0].synonyms[0] ? data.meanings[0].synonyms[0] : 'this word has no synonym' }</h4>  
     `;
     result.appendChild(div)   
}



const playaudio = (audio) =>{
 var audio = new Audio(audio);
 audio.play();
}