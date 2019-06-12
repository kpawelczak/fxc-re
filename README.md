# Forex Calculators

**Introduction**

 Forex Calculator is simple tool for traders, that seek better view of their transactions in the Forex market or to make more appropriate trading decisions.

It includes three calculators: 
* _Fibonacci_ - will calculate Fibonacci retracements (23.6%, 38.2%, 50%, 61.8%) based on three values: **high, low and type**
* _Pivot Points_ - will calculate pivot point, three levels of resistance and support based on: **high, low, close and open**
* _Positions_ - will help to manage multiple positions with calculated risk/profit levels in terms of money and pips

**Requirements**

* Js node 8.4.9
* Angular cli

**How to start**

To get started, follow these instructions:

1. Make sure you have required apps installed, see section _**Requirements**_.
2. Clone or download Forex-Calculators from [here](https://github.com/kpawelczak/forex-calculators).
3. Open /Forex-Calculators directory in comand prompt.
4. Type in 
<code>ng serve</code> 
or 
<code>ng serve -o</code>
5. Open the browser and navigate to http://localhost:4200/

**How to use**

_Technical levels_

 To get Fibonacci and Pivot Points levels simply click on **Technicals** button. Depending on what you want to see check **Fibonacci** and/or **Pivot Points** checkboxes. After which type in required values and set trade **type** (Fibonacci retracements). Technical results are calculated dynamically.

_Positions_

 To calculate risk and profit, type in required values in **Positions** form and click the **add** button. 
In the table the following cells: **Size, Price, S/L, T/P** can be edited by clicking on them. 
To delete position from the table click on the **X** button located at the end of the table row.
The **clear** button removes all positions from the table.


