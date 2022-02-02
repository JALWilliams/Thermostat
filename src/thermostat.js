'use strict';

class Thermostat {

  constructor (){
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_POWER_SAVER_MODE_ON = 25;
    this.MAX_POWER_SAVER_MODE_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.DEFAULT_TEMP = 20;
    this.powerSavingMode = true;
    this.temperature = 20;
  }

  getCurrentTemperature(){
    return this.temperature;
  }

  up(){
    if(this.isMaximumTemperature() == this.temperature){
      return;
    }
    return this.temperature+= 1;
  }

  down(degrees){
    if (this.isMinimumTemparture()){
      return;
    }
    return this.temperature -= 1;
  }

  isMinimumTemparture(){
    if(this.getCurrentTemperature()==this.MINIMUM_TEMPERATURE){
      return true;
    }
  }

  isPowerSavingMode(){
    return this.powerSavingMode;
  }

  isMaximumTemperature(){
    if (this.isPowerSavingMode()==true){
      return this.MAX_POWER_SAVER_MODE_ON;
    }
    if (this.isPowerSavingMode()==false){
      return this.MAX_POWER_SAVER_MODE_OFF;}
  }

  turnOffPSM(){
    return this.powerSavingMode = false;
  }

  turnOnPSM(){
    return this.powerSavingMode = true;
  }

  reset(){
    return this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }

}

