function main(){
    var app = new Vue({
        el: '#app',
        data: {
          images:[
            'http://placeimg.com/1200/800/any/sepia',
            'http://placeimg.com/1200/800/any/grayscale',
            'https://www.fillmurray.com/1200/800',
            'https://www.placecage.com/1200/800',
            'https://placekitten.com/1200/800'
          ],
          indexImage: 0,
          time: null,
        },
        methods:{
            nextImg:function(){
                console.log(this.indexImage);
                this.indexImage= (this.indexImage>=this.images.length-1)? this.indexImage=0 : ++this.indexImage        
            },
            prevImg:function(){                
                this.indexImage=(this.indexImage<=0)? this.indexImage=this.images.length-1 : --this.indexImage;                
            },
            setPhoto:function(i){
                this.indexImage=i;
            },
        },
        mounted:function(){
                console.log("created");
                this.nextImg();
                setInterval(this.nextImg,3000);
            
        }
            
        })
        
      }

    

