
#include <SoftwareSerial.h> //conexión SIM900 
#include "notas.h" //lista de notas con sus respectivo Hz


//primera parte Melody
int melody1[] = {  a4, R,  a4, R,  a4, R,  f4, R, c5, R,  a4, R,  f4, R, c5, R, a4, R,  e5, R,  e5, R,  e5, R,  f5, R, c5, R,  g5, R,  f5, R,  c5, R, a4, R};
int beats1[]  = {  50, 20, 50, 20, 50, 20, 40, 5, 20, 5,  60, 10, 40, 5, 20, 5, 60, 80, 50, 20, 50, 20, 50, 20, 40, 5, 20, 5,  60, 10, 40, 5,  20, 5, 60, 40};

// Melody 2: Star Wars Theme
int melody2[] = {  f4,  f4, f4,  a4s,   f5,  d5s,  d5,  c5, a5s, f5, d5s,  d5,  c5, a5s, f5, d5s, d5, d5s,   c5};
int beats2[]  = {  21,  21, 21,  128,  128,   21,  21,  21, 128, 64,  21,  21,  21, 128, 64,  21, 21,  21, 128 };

int MAX_COUNT = sizeof(melody1) / 2;
long tempo = 10000;
int pause = 1000;
int rest_count = 50;
int toneM = 0;
int beat = 0;
long duration  = 0;
int potVal = 0;
//


SoftwareSerial SIM900(7,8); //RX TX SIM900 mismos pines en arduino y sim900

int speakerOut = 9; //pin de salida del sonido 
//int led = 13;
const int pirPin = 2; //pin de entrada del PIR 
int pirState = LOW;    
int val = 0;  

void setup() {
 // SIM900.begin(19200); //velocidad serial para SIM900
 // delay(10000);      //retardo para encontrar red 
  
  pinMode(pirPin,INPUT); //cargar pin de entrada
  pinMode(speakerOut, OUTPUT);  //cargar pin de salida 
 // pinMode(led, OUTPUT);
  Serial.begin(9600); //velocidad serial para el arduino
  Serial.println("OK");

}

void loop() {
    
    val = digitalRead(pirPin); //obtenemos estado PIR 
    if(val == HIGH){
       //llamar();  //realiza llamada si PIR HIGH
        songStart(true);  // reproducción canción 
        
        if(pirState == LOW);{     //si previamente estaba apagado
             songStart(true);
             Serial.println("Sensor activo");
             pirState = HIGH;
         }           
      }
      else{
        
           songStart(false);
           if( pirState == HIGH){
               songStart(false);
              Serial.println("Sensor parado");
              pirState = LOW;  
            }
        }
}
//recibe un true o false, controla intervalo de la canción a sonar 
void songStart(bool state){
 
    for (int i=0; i<MAX_COUNT; i++) {
      
        toneM = melody1[i];
        beat = beats1[i];
        duration = beat * tempo;
        
         playTone(state); 
         delayMicroseconds(pause);
         if(state == false){
           
             break;
          }     
      }
    // Melody2
    MAX_COUNT = sizeof(melody2) / 2;
    for (int i = 0; i < MAX_COUNT; i++) {
        
        toneM = melody2[i];
        beat = beats2[i];
        duration = beat * tempo;
        playTone(state);
        delayMicroseconds(pause);
        if(state == false){
          
            break;
          }
      }

}

//reproduccion de sonido con los datos de toneM - duration, variable recibida controla tiempo reproducción 
void playTone(bool state) {

    long elapsed_time = 0;
    
          if (toneM > 0) {
    
          //digitalWrite(led,HIGH);
    
              while (elapsed_time < duration) {
                       if(state == false){
                          duration = 0;
                          break;
                        }
                      digitalWrite(speakerOut,HIGH);
                      delayMicroseconds(toneM / 2);
                      digitalWrite(speakerOut, LOW);
                      delayMicroseconds(toneM / 2);
                      elapsed_time += (toneM);
                   
                  }
          }
          //digitalWrite(led,LOW);
          else {
              for (int j = 0; j < rest_count; j++) {
                 delayMicroseconds(duration);
               }
         }
}

void llamar(){
    SIM900.println("ATD +573103311676;"); //celular a llamar
    delay(100);
    SIM900.println();
    delay(10000); // llama y espera 10 
    SIM900.println("ATH");
    delay(1000);
   
  }
