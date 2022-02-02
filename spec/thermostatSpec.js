'use strict';

describe ('Thermostat', ()=> {

  let thermostat;

  beforeEach(()=>{
    thermostat = new Thermostat();
  });

  it ('Thermostat starts at 20 degrees', ()=>{
    // expect(thermostat.temperature).toEqual(20);
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it ('You can increase the temperature with an up function', ()=> {
    thermostat.getCurrentTemperature();
    expect(thermostat.up()).toEqual(21);
  });

  it ('You can decrease the temperature with a down function', ()=>{
    thermostat.getCurrentTemperature();
    expect(thermostat.down()).toEqual(19);
  });

  it ('The minimum temperature is 10 degrees', ()=>{
  
    for(let i=0; i<11 ;i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
    
  });

  it ('Has a power saving mode', ()=>{
    expect(thermostat.isPowerSavingMode()).toBe(true);
  });

  it ('Has a maxmium temp of 25 when PSM ON', ()=>{
    spyOn(thermostat,'isPowerSavingMode').and.returnValue(true);
    expect(thermostat.isPowerSavingMode()).toBe(true);
    expect(thermostat.isMaximumTemperature()).toEqual(25);
  });

  it ('Has a maximum temp of 32 when PSM OFF', ()=> {
    spyOn(thermostat,'isPowerSavingMode').and.returnValue(false);
    expect(thermostat.isPowerSavingMode()).toBe(false);
    expect(thermostat.isMaximumTemperature()).toEqual(32);
  });

  it ('Power saving mode on by default, but can be turned off', ()=>{
    expect(thermostat.isPowerSavingMode()).toBe(true);
    thermostat.turnOffPSM();
    expect(thermostat.isPowerSavingMode()).toBe(false);
  });

  it ('Can reset the temparature to 20',()=>{
    thermostat.up()
    expect(thermostat.reset()).toEqual(20);
  });

  it ('Low usage < 18', ()=>{
    for(let i=0;i<3;i++){
      thermostat.down();
    }

    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it ('Medium usage <= 25', ()=>{
    for (let i=0; i<5;i++){
      thermostat.up();
    }

    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });


  it('it is considered high-usage', () => {
    thermostat.powerSavingMode = false;
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

  
});