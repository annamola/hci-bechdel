import pandas as pd
import json

import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression

tests_df = pd.read_csv("nextBechdel_allTests.csv")
all_tests = ["bechdel","peirce","landau","feldman","villareal","hagen","ko","villarobos","waithe","koeze_dottle","uphold","white","rees-davies"]
behind_the_camera = ["uphold", "rees-davies", "white"]
intersectional = ["waithe", "ko", "villarobos"]
supporting_cast = ["hagen", "koeze_dottle", "feldman"]
protaginists = ["peirce", "villareal", "landau"]


def process_cast(tests):
    cast_df = pd.read_csv("nextBechdel_castGender.csv")
    pass_data = {}

    for idx, row in tests_df.iterrows():
        # bechdel,peirce,landau,feldman,villareal,hagen,ko,villarobos,waithe,koeze_dottle,uphold,white,rees-davies
        passed = 0

        for t in tests:
            if row[t] == 0: passed += 1

        pass_data[row['movie']] = round(passed / len(tests) * 100, 2) # Percentage of tests passed


    gender_data = {}

    for movie in pass_data:

        name = movie

        if movie == "Allegiant":
            name = "The Divergent Series: Allegiant"
        if movie == "Miss Peregrine's Home for Peculiar Children":
            name = "Miss Peregrine’s Home for Peculiar Children"
        if movie == "Boo! A Madea Halloween":
            name = "Tyler Perry’s Boo! A Madea Halloween"
        if movie == "Pete's Dragon":
            name = "Pete’s Dragon"
        if movie == "The Conjuring 2":
            name = "The Conjuring 2: The Enfield Poltergeist"
        if movie == "Don't Breathe":
            name = "Don’t Breathe"
        if movie == "Rogue One":
            name = "Rogue One: A Star Wars Story"

        subset = cast_df[cast_df['MOVIE'] == name]

        if subset.size == 0:
            print("ERROR:", movie)
            continue

        female = 0
        total = 0

        for idx, row in subset.iterrows():
            total += 1
            if row['GENDER'] == "Female":
                female += 1
        
        gender_data[movie] = {
            "female": round(female / total * 100, 2),
            "male": round((total-female) / total * 100, 2)}
        
    output = {}

    for m in pass_data:
        # if m not in gender_data: continue
        # print(m, pass_data[m], gender_data[m])
        output[m] = {
            "tests_passed": pass_data[m],
            "female": gender_data[m]["female"],
            "male": gender_data[m]["male"]}

    # Size
    print(len(gender_data))

    with open("cast_data.json", 'w') as outfile:
        json.dump(output, outfile)


    # print("Female distribution")
    # l = [(gender_data[m]['female'], pass_data[m]) for m in gender_data]
    # l.sort()
    # print(l)

    # print("Male distribution")
    # l = [(gender_data[m]['male'], pass_data[m]) for m in gender_data]
    # l.sort()
    # print(l)

    # print("Pass distribution")
    # l = [pass_data[m] for m in gender_data]
    # l.sort()
    # print(l)
    return output

def clean_name(name):
    if "(" in name:
        name = name[:-7]
    
    if "_" in name:
        result = ""
        for w in name.split("_"): result += w + " "
        result.strip()
        name = result
    
    return name
    


def process_crew(tests):
    crew_df = pd.read_csv("nextBechdel_crewGender.csv")
    pass_data = {}

    for idx, row in tests_df.iterrows():
        passed = 0

        for t in tests:
            if row[t] == 0: passed += 1

        pass_data[row['movie']] = round(passed / len(tests) * 100, 2) # Percentage of tests passed
    
    clean_data = {
        "MOVIE": [],
        "DEPARTMENT": [],
        "FULL_NAME": [],
        "FIRST_NAME": [],
        "IMDB": [],
        "GENDER_PROB": [],
        "GENDER_GUESS": []
    }
    # Clean crew data movie names
    movie_names = []
    for idx, row in crew_df.iterrows():
        for c in clean_data:
            if c == "MOVIE":
                if clean_name(row[c]) not in movie_names:
                    movie_names.append(clean_name(row[c]))
                clean_data[c].append(clean_name(row[c]))
            else:
                clean_data[c].append(row[c])

    cleaned_df = pd.DataFrame(clean_data, columns=clean_data.keys())

    gender_data = {}

    for movie in pass_data:

        name = movie

        subset = cleaned_df[cleaned_df['MOVIE'] == name]

        if subset.size == 0:
            print("ERROR:", name)
            continue

        female = 0
        total = 0

        for idx, row in subset.iterrows():
            total += 1
            if row['GENDER_GUESS'] == "female":
                female += 1
        
        gender_data[movie] = {
            "female": round(female / total * 100, 2),
            "male": round((total-female) / total * 100, 2)}
        
    output = {}

    for m in movie_names:
            # if m not in gender_data: continue
            # print(m, pass_data[m], gender_data[m])
            output[m] = {
                "tests_passed": pass_data[m],
                "female": gender_data[m]["female"],
                "male": gender_data[m]["male"]}

    # Size
    print(len(gender_data))

    # with open("crew_data.json", 'w') as outfile:
    #     json.dump(output, outfile)

    # print("Female distribution")
    # l = [(gender_data[m]['female'], m,pass_data[m]) for m in movie_names]
    # l.sort()
    # print(l)

    # print("Male distribution")
    # l = [(gender_data[m]['male'], m, pass_data[m]) for m in movie_names]
    # l.sort()
    # print(l)

    # print("Pass distribution")
    # l = [pass_data[m] for m in movie_names]
    # l.sort()
    # print(l)
    return output

if __name__ == "__main__":

    a = process_cast(all_tests)

    x = [a[m]['female'] for m in a]
    y = [a[m]['tests_passed'] for m in a]

    plt.scatter(x, y)
    plt.xlabel("female cast pcnt%")
    plt.ylabel("test passed pcnt%")
    plt.grid(True)
    
    LR = False

    if LR:
        x_train, y_train = np.asarray(x), np.asarray(y)
        model = LinearRegression()
        model.fit(x_train.reshape(-1, 1), y_train.reshape(-1, 1))

        x_test = np.asarray(np.arange(101))
        print(x_test)
        print("Here")
        y_pred = model.predict(x_test.reshape(-1, 1))

        for x, y in zip(x_test, y_pred):
            y_true = round(int(y), 2)

            if y_true < 0:
                y_true = 0

            print(f"map1.set(\"{x}\", {y_true});")

        # plt.plot(y_pred, color="red")
        plt.plot(x_test, y_pred, color="red")
    plt.show()


    # for m in b:
    #     print(f"{m}: passed {b[m]['tests_passed']}%\nFemale cast: {a[m]['female']}%\nFemale crew: {b[m]['female']}\n")



