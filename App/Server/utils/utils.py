def classify(arr):
    returnstring = ""
    q6 = arr[13:15]
    maxval = max(q6)
    maxloc = q6.index(maxval)
    if (maxloc==1):
        q1 = arr[0:3]
        maxval = max(q1)
        maxloc = q1.index(maxval)
        if(maxloc==2):
            returnstring = "Irregular"
        elif(maxloc==0):
            q7 = arr[15:18]
            maxval = max(q7)
            maxloc = q7.index(maxval)
            if(maxloc==0):
                returnstring = "E0"
            elif(maxloc==1):
                returnstring = "E5"
            else:
                returnstring = "E7"
        else:
            q2 = arr[3:5]
            maxval = max(q2)
            maxloc = q2.index(maxval)
            if(maxval==0):
                q9 = arr[25:28]
                maxval = max(q9)
                maxloc = q9.index(maxval)
                if(maxloc==0):
                    returnstring = "Sx"
                elif(maxloc==1):
                    returnstring = "SBx"
                else:
                    returnstring = "S0"
                
            else:
                q3 = arr[5:7]
                maxval = max(q3)
                maxloc = q3.index(maxval)
                if(maxloc==1):
                    q4 = arr[6:8]
                    maxval = max(q4)
                    maxloc = q4.index(maxval)
                    if(maxloc==0):
                        q10 = arr[28:31]
                        maxval = max(q10)
                        maxloc = q10.index(maxval)
                        if(maxloc==2):
                            returnstring = "S0"
                        else:
                            q11 = arr[31:]
                            maxval = max(q11)
                            maxloc = q11.index(maxval)
                            if(maxloc==0):
                                returnstring = "SBx"
                            elif(maxloc==1):
                                returnstring = "SBx"
                            elif(maxloc==2):
                                returnstring = "SBx"
                            elif(maxloc==3):
                                returnstring = "SBx"
                            elif(maxloc==4):
                                returnstring = "SBx"
                            else:
                                returnstring = "SBx"
                    else:
                        q5 = arr[9:13]
                        maxval = max(q5)
                        maxloc = q5.index(maxval)
                        if(maxloc == 0):
                            returnstring = "E1"
                        elif(maxloc == 1):
                            returnstring = "E2"
                        elif(maxloc == 2):
                            returnstring = "E3"
                        elif(maxloc == 3):
                            returnstring = "E4"
                else:
                    q4 = arr[6:8]
                    maxval = max(q4)
                    maxloc = q4.index(maxval)
                    if(maxloc==0):
                        q10 = arr[28:31]
                        maxval = max(q10)
                        maxloc = q10.index(maxval)
                        if(maxloc==2):
                            returnstring = "S0"
                        else:
                            q11 = arr[31:]
                            maxval = max(q11)
                            maxloc = q11.index(maxval)
                            if(maxloc==0):
                                returnstring = "Sx"
                            elif(maxloc==1):
                                returnstring = "Sx"
                            elif(maxloc==2):
                                returnstring = "Sx"
                            elif(maxloc==3):
                                returnstring = "Sx"
                            elif(maxloc==4):
                                returnstring = "Sx"
                            else:
                                returnstring = "Sx"
                    else:
                        q5 = arr[9:13]
                        maxval = max(q5)
                        maxloc = q5.index(maxval)
                        if(maxloc == 0):
                            returnstring = "E1"
                        elif(maxloc == 1):
                            returnstring = "E2"
                        elif(maxloc == 2):
                            returnstring = "E3"
                        elif(maxloc == 3):
                            returnstring = "E4"
                     
    else:
        returnstring = "Irregular"
    return returnstring
        
        
    

