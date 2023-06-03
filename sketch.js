var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada,
pontos,vida,estadoJogo
var imagemAtor,imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro4, imagemCarro5,imagemCarro6,imagemEstrada

function preload(){
  imagemAtor = loadImage('imagens/ator-1.png')
  
  imagemCarro1 = loadImage('imagens/carro-1.png')
  imagemCarro2 = loadImage('imagens/carro-2.png')
  imagemCarro3 = loadImage('imagens/carro-3.png')
  imagemCarro4 = loadImage('imagens/carro-1.png')
  imagemCarro5 = loadImage('imagens/carro-2.png')
  imagemCarro6 = loadImage('imagens/carro-3.png')
  imagemEstrada = loadImage('imagens/estrada.png')
  
}

function setup(){
  createCanvas(600,350)

pontos = 0 
vida = 3
  
carro1=createSprite(559,50,20,20)  
carro1.addImage(imagemCarro1)
carro1.scale = 0.4
carro2=createSprite(559,100,20,20) 
carro2.addImage(imagemCarro2) 
carro2.scale = 0.4  
carro3=createSprite(559,150,20,20) 
carro3.addImage(imagemCarro3)  
carro3.scale = 0.4  
carro4=createSprite(559,200,20,20)
carro4.addImage(imagemCarro1)  
carro4.scale = 0.4  
carro5=createSprite(559,250,20,20)
carro5.addImage(imagemCarro2)  
carro5.scale = 0.4  
carro6=createSprite(559,300,20,20)
carro6.addImage(imagemCarro3)  
carro6.scale = 0.4  
  

  
ator=createSprite(300,335,20,20) 
ator.addImage(imagemAtor)
ator.scale = 0.2
  
estadoJogo = 'parado'  
  
}

function draw(){
  
  background(imagemEstrada)
  drawSprites()
  fill('red')
  text('Pontuação: ' + pontos ,5, 20)  
  text('vidas: ' + vida ,555, 20)
  
  if(estadoJogo == 'parado'){    
    
textSize(20)    
text('pressione "ESPAÇO" para iniciar',150,180)   
   if(keyDown('SPACE')){ 
  estadoJogo = 'play';
   carro1.velocityX = -10                                    
  carro2.velocityX = -8
  carro3.velocityX = -11
  carro4.velocityX = -6
  carro5.velocityX = -7
  carro6.velocityX = -9
     
 }  
    
  
}    
    
if(estadoJogo == 'play'){    
 
  
if(vida < 1){
    
   (estadoJogo = 'gamerOver')   

  
  }
     if(carro1.x < 0){
  carro1.x = 680
 if(carro2.x < 0)
 carro2.x = 680 
 if(carro3.x < 0) 
 carro3.x = 680 
 if(carro4.x < 0) 
 carro4.x = 680 
 if(carro5.x < 0) 
 carro5.x = 680 
 if(carro6.x < 0) 
 carro6.x = 680 
   
   }  
    
    if (keyDown('up')) {
 ator.y = ator.y -4
} 

  
if (keyDown('down')) {
ator.y = ator.y +  4 
  
}  
    
if  ( 
    
ator.isTouching(carro1)||
ator.isTouching(carro2) ||
ator.isTouching(carro3) ||
ator.isTouching(carro4) || 
ator.isTouching(carro5) ||  
ator.isTouching(carro6)

 )
  
  {
  
ator.x = 300
ator.y = 335 
    
vida = vida - 1
    
  }  

if(ator.y < 10)  {
  ator.y= 335
  
  pontos = pontos + 1 
  
}

if(ator.y > 335) {
  ator.y= 335

}
    
}    
    
if(estadoJogo == 'gamerOver'){ 
 
textSize(30)
text('GAME OVER', 190, 190)    
ator.remove()   
carro1.remove()    
carro2.remove()  
carro3.remove()
carro4.remove()
carro5.remove()
carro6.remove()


  
}  
  
}