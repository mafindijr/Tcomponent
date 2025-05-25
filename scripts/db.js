const menu = document.querySelector('#Menu');

const hamburger = document.querySelector('#burger');

hamburger.addEventListener('click', () => {

 if(menu.classList.contains('hidden')) {
   
    menu.classList.remove('hidden');

 } else {

    manu.classList.add('hidden');

 }
})

   const eventsData = [
   {
      name: 'Hackquest/Xion Meet Up',
      image: 'images (2).jpeg',
      date: '7 june, 2023',
      location: 'C2c Arena Jaliongo'

   },

   {
      name: 'Coffee Drink',
      image: '20250115_064046.jpg',
      date: '3 march, 2024',
      location: 'Road House Cafeteria'
   },

   {
      name: 'Xion Beliverthon',
      image: 'images.jpeg',
      date: '05 january, 2024',
      location: 'NIN Millenium Hotel'
   }
];

    let eventHmtl = '';

   eventsData.forEach(event => {

      const listEvents = `
   
   <div  class="flex justify-between items-center m-2 bg-slate-800 h-20 rounded-md shadow-lg overflow-hidden md:h-300 md:w-200 ">
                    <div class="ml-4 m-2">

                        <p class="text-md font-bold ">${event.name}</p>
                        <span class="text-sm text-gray-400 block"> <svg class="w-4 inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                          </svg>${event.date}</span>

                          <span class="text-md text-gray-400 font-semibold"> <svg class="w-4 inline-flex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>${event.location}</span>

                    </div>

                    <div class="">
                        <img class="h-20" src="images/${event.image}" alt="">
                    </div>
                </div>
`;
         eventHmtl += listEvents;
   });

document.querySelector('#event-list')
 .innerHTML = eventHmtl;



