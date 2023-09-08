# Theory


### Zener Diode

A Zener Diode is a special kind of diode which permits current to flow in the forward direction as normal, but will also allow it to flow in the reverse direction when the voltage is above the breakdown voltage or ‘zener’ voltage. Zener diodes are designed so that their breakdown voltage is much lower - for example just 2.4 Volts.

<div align="center">
<img src="images/zenerdi3.png" width="50%">
<p>Figure 1  </p>
</div>

<div align="center">
<img src="images/zenerdi2.png" width="50%">
<p>Figure 2  </p>
</div>

### Function of Zener Diode

1. Zener diodes are a special kind of diode which permits current to flow in the forward direction.
2. Zener diodes will also allow current to flow in the reverse direction when the voltage is above a certain value. This breakdown voltage is known as the Zener voltage. In a standard diode, the Zener voltage is high, and the diode is permanently damaged if a reverse current above that value is allowed to pass through it.
3. In the reverse bias direction, there is practically no reverse current flow until the breakdown voltage is reached. When this occurs there is a sharp increase in reverse current. Varying amount of reverse current can pass through the diode without damaging it. The breakdown voltage or zener voltage (VZ) across the diode remains relatively constant.

### Zener Diode As A Voltage Regulator

A voltage regulator is an electronic circuit that provides a stable DC voltage independent of the load current, temperature and AC line voltage variations. A Zener diode of break down voltage V<sub>Z</sub> is reverse connected to an input voltage source VI across a load resistance RL and a series resistor RS. The voltage across the zener will remain steady at its break down voltage VZ for all the values of zener current IZ  as long as the current remains in the break down region. Hence a regulated DC output voltage V0=VZ is obtained across RL, whenever the input voltage remains within a minimum and maximum voltage. Basically there are two type of regulations such as:
**Line Regulation:** In this type of regulation, series resistance and load resistance are fixed, only input voltage is changing. Output voltage remains the same as long as the input voltage is maintained above a minimum value.
**Load Regulation:** In this type of regulation, input voltage is fixed and the load resistance is varying. Output volt remains same, as long as the load resistance is maintained above a minimum value.

### Line Regulation 
<div align="center">
<img src="images/zenerdli.png" width="50%">
<p>Figure 3  </p>
</div>
In Line Regulation, Load resistance is constant and input voltage varies. VI must be sufficiently large to turn the Zener Diode ON.

$$V_L = V_Z= \frac{V_{Imin} \times R_L}{(R_S + R_L)}$$

So, the minimum turn-on voltage V<sub>Imin</sub> is :

$$V_{Imin}= \frac{V_Z \times (R_S + R_L)}{R_L}$$
                            
 The maximum value of V<sub>I</sub> is limited by the maximum zener current I<sub>Zmax</sub>
 
 $$I_{Rmax}= I_{Zmax} + I_L $$              

I<sub>L</sub> is fixed at :   
$$\frac{V_Z}{R_L}$$  
Since, V<sub>L</sub>=V<sub>Z</sub> 

So maximum V<sub>I</sub> is   
$$V_{Imax} =  V_{Rmax} + V_Z$$
$$V_{Imax} = I_{Rmax} \times R + V_Z$$
For V<sub>I </sub> < V<sub>Z</sub>
$$V_O= V_I$$
For V<sub>I</sub> > V<sub>Z</sub> 
$$V_O = V_I − I_S \times R_S$$

### Load Rotation

<div align="center">
<img src="images/zenerdlo.png" width="50%">
<p>Figure 4  </p>
</div>

In Load Regulation , input voltage is constant and Load resistance varies. Too small a Load Resistance R<sub>L</sub>,will result in V<sub>Th</sub> < V<sub>Z</sub> and Zener Diode will be OFF.

$$V_L = V_Z = \frac{V_{Imin} \times R_L}{(R_S + R_L)}$$

So the minimum load resistance R<sub>L</sub> 

$$R_{Lmin} = \frac{V_Z  \times R_S}{V_I− V_Z}$$

Any load resistance greater than R<sub>Lmin</sub> will make Zener Diode ON   

$$I_S  = I_L + I_Z$$

R<sub>Lmin</sub> will establish maximum I<sub>L</sub> as   

$$I_{Lmax}=\frac{V_L}{R_{Lmin}}= \frac{V_Z}{R_{Lmin}} \qquad Since, V_L=V_Z$$

V<sub>S</sub> is the voltage drop across R<sub>S</sub>

$$V_S = V_{Imin} - V_Z$$

$$I_S = \frac{V_{Imin}− V_Z}{R_S}$$

For R<sub>L </sub>< R<sub>Lmin</sub>

$$V_O= V_I$$

For R<sub>L</sub> > R<sub>Lmin</sub>

$$V_O = V_I − I_S \times R_S$$


## Assignment

1. The circuit shown uses a 9.0V zener diode. If the load resistance RL is equal to 1.5 kΩ, and the DC source equals 24V, find the maximum value of resistor RS required to maintain a constant voltage of 9V across the load.
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Ans:RS =2.5 KΩ ]
<div align="center">
<img src="images/zndassg1.png" width="50%">
<p>Figure 5  </p>
</div>

2. Determine the range of (V<sub>S</sub>) for obtaining a regulated voltage shown in Fig.6 for the data
0≤(I<sub>L</sub>)≤4mA
2≤IZ≤8mA
[Where Z=50V,(R<sub>S</sub>)=5KΩ]
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Ans:The range of source voltage is 50 ≤ (V<sub>S</sub>) ≤ 110 V]

<div align="center">
<img src="images/zndassg2.png" width="50%">
<p>Figure 6  </p>
</div>

3. Determine the R<sub>Lmin</sub>, where R<sub>S</sub>=1KΩ ,Vin=50V, V<sub>Z</sub>=10V

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
[Ans:R<sub>Lmin</sub>=300Ω ]

<div align="center">
<img src="images/zndassg3.PNG" width="50%">
<p>Figure 7  </p>
</div>

4. Determine the I<sub>L</sub> and I<sub>Z</sub>, where R<sub>S</sub>=160KΩ ,V<sub>in</sub>=24V, V<sub>Z</sub>=12V,
200≤R<sub>L</sub>≤∞
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
[Ans: 0 ≤ I<sub>L</sub> ≤ 60 mA & 75 ≥ I<sub>Z</sub> ≥ 15mA]

<div align="center">
<img src="images/zndassg3.PNG" width="50%">
<p>Figure 8  </p>
</div>


5. Determine the I<sub>S</sub> and I<sub>Z</sub>,where R<sub>S</sub>=5KΩ , V<sub>Z</sub>=50V, R<sub>L</sub>=10KΩ
80≤V<sub>S</sub>≤120
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
[Ans: 6mA ≤ I<sub>S</sub> ≤ 14 mA & 1mA ≥ I<sub>Z</sub> ≥ 9mA]

<div align="center">
<img src="images/zndassg2.png" width="50%">
<p>Figure 9  </p>
</div>

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>