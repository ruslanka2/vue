const sort = {
    data (){
        return {
            selecttitle:0,
            articles: [
              {
                tag: "kitchen",
                title: "Lets Get Solution for Building Construction Work",
                img: "img/11.svg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!",
              },
              {tag:"bedroom",title:"Let’s Get Solution for Building Construction Work",img:"img/8.svg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!"},
              {tag:"building",title:"Let’s Get Solution for Building Construction Work",img:"img/item1.jpg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!"},
              {tag:"archilecture",title:"Let’s Get Solution for Building Construction Work",img:"img/item2.jpg",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!"}
            ],
          };
        
        
    },
    template:`<div class="aricle-box" >
    <article  class="articles" v-for="arti in articles"
    :key="arti.tag " 
    >
    <div v-if="arti.tag === selecttitle || selecttitle === 'all'">
      <h2 class="articles__title">{{arti.title}}</h2>
      <img :src="arti.img" alt="" class="articles__img" />
      <p class="articles__text">
        {{arti.text}}
       
      </p></div>
    </article>
  </article>
  <article class="articles" v-for="arti in articles" :key="arti.tag">
    <div v-if="arti.tag !== selecttitle">
      <h2 class="articles__title">{{arti.title}}</h2>
      <img :src="arti.img" alt="" class="articles__img" />
      <p class="articles__text">
        {{arti.text}}
      </p>
    </div>
  </article>
  </div>
    <div class="tagss">
      <h2 class="tags__title">Tags</h2>
      <button class="tags__button" :class="{ active: selecttitle === 'kitchen' }"@click="selecttitle='kitchen'":class="{ active: selecttitle === 'kitchen' }">Kitchen</button>
      <button class="tags__button" @click="selecttitle='bedroom'":class="{ active: selecttitle === 'bedroom' }">Bedroom</button>
      <button class="tags__button" @click="selecttitle='building'":class="{ active: selecttitle === 'building' }">Building</button>
      <button class="tags__button" @click="selecttitle='archilecture'":class="{ active: selecttitle === 'archilecture' }">Architecture</button>
    </div>`
}