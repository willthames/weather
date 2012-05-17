import numpy as np
from pandas import *
import matplotlib.pyplot as plt
from pylab import figure, show
from datetime import timedelta
import bom
import had

bom_df = bom.rainfall('IDCJDW4020.201204.csv')
had_df = had.rainfall("HadSEEP_daily_qc.txt", 2012, 4)

xss = had_df.index
yss = np.cumsum(had_df["Rainfall"])

# Set ylim to a round 100mm above the max of the sum of the two datasets
ylim = ceil(max(np.sum(had_df["Rainfall"]), np.sum(bom_df["Rainfall"]))/100)*100

fig = plt.figure()

ax1 = fig.add_subplot(121)
ax1.plot(np.cumsum(had_df["Rainfall"]), label = "UK rainfall")
ax1.set_ylim(0,ylim)
ax1.set_title("UK rainfall April 2012")

ax2 = fig.add_subplot(122)
ax2.plot(np.cumsum(bom_df["Rainfall"]), label = "Aus rainfall")
ax2.set_ylim(0,ylim)
ax2.set_title("Aus rainfall April 2012")

plt.show()
