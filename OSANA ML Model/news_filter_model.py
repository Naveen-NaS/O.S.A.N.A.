# -*- coding: utf-8 -*-
"""News Filter Model.ipynb

Original file is located at
    https://colab.research.google.com/drive/1meVb3P_5JrRkyk2pQJeZDMjFlW-_g9--

# News Filter Model

## Importing Libraries
"""

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.metrics import confusion_matrix
import seaborn as sns
from wordcloud import WordCloud
from sklearn.feature_extraction.text import TfidfVectorizer

"""## Importing DataSet"""

dataset = pd.read_csv("news_dataset.csv")

"""## Taking Care of Missing Data"""

# Fill missing values with an empty string
dataset["text"].fillna("", inplace=True)

"""## Analysing the Data"""

dataset.head()

# Analysing Fake patterns using Word Cloud
fake_news_texts = dataset[dataset["label"] == "FAKE"]["text"].astype(str)
fake_news_words = " ".join(fake_news_texts)
wordcloud = WordCloud(width=800, height=600, background_color="black").generate(
    fake_news_words
)

# Plotting Word Cloud
plt.figure(figsize=(10, 8))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.title("Fake News Word Cloud")
plt.show()

dataset.head()

dataset.info()

dataset.describe()

dataset.sample(10)

"""## DataSet Classification"""

# Using TF-IDF vectorizer for Analyzing Categorial data
tfidf = TfidfVectorizer(stop_words="english")

X = tfidf.fit_transform(dataset["text"])
y = dataset["label"]

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

"""## Building a Model"""

from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

"""## Prediction and Accuracy Analysis"""

y_pred = model.predict(X_test)
conf_matrix = confusion_matrix(y_test, y_pred)

plt.figure(figsize=(6, 4))
sns.heatmap(
    conf_matrix,
    annot=True,
    fmt="d",
    cmap="Blues",
    xticklabels=["REAL", "FAKE"],
    yticklabels=["REAL", "FAKE"],
)
plt.xlabel("Predicted labels")
plt.ylabel("True labels")
plt.title("Confusion Matrix")
plt.show()

"""## Implementating Model on Given Data"""

pred_dataset = pd.read_csv("Top100.csv")


def scan_and_save(pred_dataset):
    real_news = []
    for i in range(len(pred_dataset)):
        text = pred_dataset.iloc[i]["Headline"]
        transformed_text = tfidf.transform([text])
        prediction = model.predict(transformed_text)[0]
        if prediction == "REAL":
            real_news.append(pred_dataset.iloc[i])

    new_dataset = pd.DataFrame(real_news)
    new_dataset.to_csv("real_news.csv", index=False)


scan_and_save(pred_dataset)
