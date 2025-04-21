function loadData(){

    fetch("https://openapi.programming-hero.com/api/levels/all").then(
        (res) => res.json()
    ).then((dat) => displayData(dat.data));

}
loadData();

function removeActiveClass(){

    const rmv = document.getElementsByClassName("active");

    for(let btn of rmv){
        btn.classList.remove("active");
    }
}

const showLoader = () => {

    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("lessonContainer").classList.add("hidden");
}

const hideLoader = () => {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        document.getElementById("lessonContainer").classList.remove("hidden");
    }, 300);
}
// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }


const loadCategoryLessons = (idNum) => {

    //console.log(idNum);

    showLoader();
    

    const url = `https://openapi.programming-hero.com/api/level/${idNum}`;
   // console.log(url);

    fetch(url).then(
        (responsed) => responsed.json()
    ).then((mydat) => displayLessons(mydat.data));

    removeActiveClass();
    const clickedButton = document.getElementById(`btn-${idNum}`);

    clickedButton.classList.add("active");

    hideLoader();
}


function displayData(data){

    const dataContainer = document.getElementById("dataContainer");


    for(let dt of data){
       // console.log(dt);

        const dataDiv=document.createElement("div");
        dataDiv.innerHTML = `
        <button id="btn-${dt.level_no}" onclick="loadCategoryLessons(${dt.level_no})" class="btn bg-transparent border-2 border-[#422AD5] flex items-center justify-center px-4 py-4 text-[#422AD5] text-xs font-bold hover:bg-[#422AD5] hover:text-white"><i class="fa-solid fa-book-open" "></i> ${dt.lessonName}</button>
        
        `;
        dataContainer.append(dataDiv);
    }

}

// fetch lessons

const loadWordDetails = (wordId) => {

    console.log(wordId);

    const url = `https://openapi.programming-hero.com/api/word/${wordId}`;

    fetch(url).then(
        (responsed) => responsed.json()
    ).then((mydata) => displayWordDetails(mydata.data));


}

const displayWordDetails = (word) => {

    console.log(word);
    
    const detailsContainer = document.getElementById("wordDetailsShow");

    // {
    //     "word": "Eager",
    //     "meaning": "আগ্রহী",
    //     "pronunciation": "ইগার",
    //     "level": 1,
    //     "sentence": "The kids were eager to open their gifts.",
    //     "points": 1,
    //     "partsOfSpeech": "adjective",
    //     "synonyms": [
    //         "enthusiastic",
    //         "excited",
    //         "keen"
    //     ],
    //     "id": 5
    // }



let synonymsHTML = '';

if (word.synonyms && word.synonyms.length > 0) {
    word.synonyms.forEach(synonym => {
        if (synonym) {
            synonymsHTML += `<p class="p-2 bg-[#EDF7FF] rounded-lg border-1 border-solid border-[#D7E4EF]">${synonym}</p>`;
        } else {
            synonymsHTML += `<p class="p-2 bg-[#EDF7FF] rounded-lg border-1 border-solid border-[#D7E4EF]"><i class="fa-solid fa-triangle-exclamation"></i> Not found</p>`;
        }
    });
} else {
    synonymsHTML = `<p class="p-2 bg-[#da0909] font-bold text-white rounded-lg border-1 border-solid border-[#D7E4EF]"><i class="fa-solid fa-triangle-exclamation"></i> Not found</p>`;
}


    detailsContainer.innerHTML=`
    
                            <h3 class="text-2xl font-bold">${word.word} ( <i class="fa-solid fa-microphone"></i> :${word.pronunciation} )</h3>
                        <p class="py-2 font-semibold">Meaning</p>
                        <p class="py-2 font-semibold work-sans-hind">${word.meaning === null ? 'Meaning Not Available' : word.meaning}</p>
                        <p class="py-2 font-semibold">Example</p>
                        <p class="py-2 font-normal">${word.sentence === null ? 'Example Not Available' : word.sentence}</p>
                        <p class="py-2 font-semibold">সমার্থক শব্দ গুলো</p>
                        <div class="flex gap-2">
                        ${synonymsHTML}
                        </div>
    
    `;
    document.getElementById("wordDetails").showModal();

}

function loadLessons(){

    fetch("https://openapi.programming-hero.com/api/words/all").then(
        (response) => response.json()
    ).then((datas) => displayLessons(datas.data));

}
// loadLessons();



// {
//     "id": 1,
//     "level": 3,
//     "word": "Abundant",
//     "meaning": null,
//     "pronunciation": "অবানডান্ট"
// }




const displayLessons = (data) => {
    
   

    const lessonContainer = document.getElementById("lessonContainer");

    lessonContainer.innerHTML="";

    if(data.length === 0){

        setTimeout(() => {
            hideLoader();
            lessonContainer.innerHTML = `            
            <div class="flex flex-col justify-center items-center gap-2 col-span-3 mx-auto">
                <img src="assets/alert-error.png" class="w-[130px]" alt="">
                <p class="text-[#79716B] text-center text-sm font-bold work-sans-hind">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি</p>
                <p class="text-center text-3xl mt-2 font-bold work-sans-hind">নেক্সট Lesson এ যান</p>
            </div>`;
        }, 300);

        return;
    }

    data.forEach((dt) => {

      //  console.log(dt);

        const lessonCard = document.createElement("div");

        lessonCard.innerHTML =`

                     <div class="bg-white border-2 border-solid border-[#EDF7FF] rounded-lg p-8">
                        <div class="flex flex-col justify-center items-center work-sans-hind gap-4">
                            <p class="font-bold">${dt.word}</p>
                            <p class="font-medium">Meaning / Pronounciation</p>
                            <p class="font-semibold">"${dt.meaning === null ? 'Meaning Not Available' : dt.meaning} / ${dt.pronunciation === null ? 'Pronunciation Not Available' : dt.pronunciation}"</p>
                        </div>
                        <div class="flex justify-between pt-16">
                            <button class="btn" onclick=loadWordDetails(${dt.id})><i class="fa-solid fa-circle-info"></i></button>
                            <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
        
        `;

        lessonContainer.append(lessonCard);
        
    });

    hideLoader();
};

