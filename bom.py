import numpy as np
from pandas import *

def rainfall(filename):
    df = read_csv(filename, skiprows=6, header=None)

    result_df = df[["X.5"]]
    result_df.index = df["X.2"].apply(
        lambda x: datetime.strftime(datetime.strptime(x, "%Y-%m-%d"), "%Y-%m-%d"))
    result_df = result_df.rename(columns={ result_df.columns[0]: 'Rainfall' })
    return result_df

if __name__ == "__main__":
    print rainfall('IDCJDW4020.201204.csv')
