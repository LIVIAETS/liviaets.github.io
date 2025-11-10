---
layout: datasets
permalink: /bah-dataset/
title: "BAH Dataset for Ambivalence/Hesitancy Recognition in Videos for Behavioural Change"
tags: [Behavioural Ambivalence/Hesitancy, BAH Dataset, New Dataset, Behavioural Change, Affective Computing, Deep Learning, Benchmark, 2025, Code, Github, Hugging Face]
comments: false
---



by
**Manuela González-González<sup>3,4</sup>,
Soufiane Belharbi<sup>1</sup>,
Muhammad Osama Zeeshan<sup>1</sup>,
Masoumeh Sharafi<sup>1</sup>,
Muhammad Haseeb Aslam<sup>1</sup>,
Alessandro Lameiras Koerich<sup>2</sup>,
Marco Pedersoli<sup>1</sup>,
Simon L. Bacon<sup>3,4</sup>,
Eric Granger<sup>1</sup>**

<br />

<sup>1</sup> LIVIA, Dept. of Systems Engineering, ETS Montreal, Canada
<br/>
<sup>2</sup> LIVIA, Dept. of Software and IT Engineering, ETS Montreal, Canada
<br/>
<sup>3</sup> Dept. of Health, Kinesiology, & Applied Physiology, Concordia University, Montreal, Canada
<br/>
<sup>4</sup> Montreal Behavioural Medicine Centre, CIUSSS Nord-de-l’Ile-de-Montréal, Canada


[![Download](https://img.shields.io/badge/Dataset%20Download-blue?logo=openaccess)](https://github.com/sbelharbi/bah-dataset?tab=readme-ov-file#-bah-dataset-download-)
[![arXiv](https://img.shields.io/badge/arXiv-2505.19328-b31b1b.svg?logo=arxiv&logoColor=B31B1B)](https://arxiv.org/pdf/2505.19328)
[![Github](https://img.shields.io/badge/Github-bah--dataset-brightgreen.svg?logo=github)](https://github.com/sbelharbi/bah-dataset)
[![Hugging Face Spaces](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Weights-yellow)](https://huggingface.co/sbelharbi/bah-dataset)

<br />

<p align="center">
  <a href="/material/bah-dataset/demo.png"><img src="{{ site.url }}/material/bah-dataset/demo.png" alt="Dataset: Demo" width="800"> </a>
</p>

<br />

<p align="center">
  <a href="/material/bah-dataset/nutrition-label.jpg"><img src="{{ site.url }}/material/bah-dataset/nutrition-label.jpg" alt="BAH Dataset: Nutrition label" width="600"> </a>
</p>

<br />


{% assign lb = "{" %}
{% assign rb = "}" %}
{{ foo }}


```bibtex
@article{gonzalez-25-bah,
  title="{{ lb }}BAH{{ rb }} Dataset for Ambivalence/Hesitancy Recognition in Videos for Behavioural Change",
  author="González-González, M. and Belharbi, S. and Zeeshan, M. O. and Sharafi, M. and Aslam, M. H and Pedersoli, M. and Koerich, A. L. and Bacon, S. L. and Granger, E.",
  journal="CoRR",
  volume="abs/2505.19328",
  year="2025"
}
```




### Abstract

Recognizing complex emotions linked to ambivalence and hesitancy (A/H) can play a critical role in the personalization and effectiveness of digital behaviour change interventions. These subtle and conflicting emotions are manifested by a discord between multiple modalities, such as facial and vocal expressions, and body language. Although experts can be trained to identify A/H, integrating them into digital interventions is costly and less effective.
Automatic learning systems provide a cost-effective alternative that can adapt to individual users, and operate  seamlessly within real-time, and resource-limited environments. However, there are currently no datasets available for the design of ML models to recognize A/H.

This paper introduces a first Behavioural Ambivalence/Hesitancy (*BAH*) dataset collected for subject-based multimodal recognition of A/H in videos.  It contains videos from 224 participants captured across 9 provinces in Canada, with different age, and ethnicity. Through our web platform, we recruited participants to answer 7 questions, some of which were designed to elicit A/H while recording themselves via webcam with microphone. *BAH* amounts to 1,118 videos for a total duration of 8.26 hours with 1.5 hours of A/H.  Our behavioural team annotated timestamp segments to indicate where A/H occurs, and provide frame- and video-level annotations with the A/H cues. Video transcripts and their timestamps are also included, along with cropped and aligned faces in each frame, and a variety of participants meta-data.

Additionally, this paper provides preliminary benchmarking results baseline models for *BAH* at frame- and video-level recognition with mono- and multi-modal setups. It also includes results on models for zero-shot prediction, and for personalization using unsupervised domain adaptation. The limited performance of baseline models highlights the challenges of recognizing A/H in real-world videos. The data, code, and pretrained weights are available: [github.com/sbelharbi/bah-dataset](https://github.com/sbelharbi/bah-dataset).

### License / Download
**THIS BAH DATASET IS LICENSED UNDER PROPRIETARY LICENSE FOR RESEARCH ONLY. TO REQUEST THE DATASET PLEASE FOLLOW THESE INSTRUCTIONS:**
[BAH-DATSET-REQUEST](https://github.com/sbelharbi/bah-dataset?tab=readme-ov-file#-bah-dataset-download-).



### *BAH*: Capture & Annotation
<p align="center">
<a href="/material/bah-dataset/data-capturing.png"><img src="{{ site.url }}/material/bah-dataset/data-capturing.png"   alt="Dataset capture" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/7-questions.png"><img src="{{ site.url }}/material/bah-dataset/7-questions.png"   alt="Dataset capture: 7 questions" width="800"></a>
</p>

### *BAH*: Variability
The dataset is designed to approximate the demographic distribution of sex and provincial representation in Canada.
The *BAH* dataset is composed of 224 participant across Canada from nine provinces where 31.2% of participants is from British Columbia followed by Alberta with 20.5% and Quebec with 16.5% .

All participants agreed to be part of this dataset. However, 50 participants (22.3%) did not consent to be in publications while only seven participants (3.1%) did not consent to be part of challenges. The recorded videos contain both English and French languages.
Each participant can record up to seven videos where 96 participants have recorded the full seven videos. We obtained an average of ${\sim5}$ videos/participant where each participant has an average of ${\sim2.84}$ videos with A/H which is equivalent to ${\sim585}$ frames of A/H (or $\sim24.15$ seconds of A/H). The dataset amounts a total of 1,118 videos (${\sim 8.26}$ hours) where 638 videos contain A/H (${\sim 1.50}$ hours). This amounts to 714,005 total frames where 131,103 contain A/H. Since captured videos represent answers to questions, they are relatively short. *BAH* dataset has an average video duration of ${26.58 \pm 16.36}$ (seconds) with a minimum and maximum duration of 3 and 96 seconds.

An important characteristic of this dataset is the duration of the A/H segments in videos. *BAH* counts a total of 376 videos with multiple A/H segments and 259 videos with only one A/H segment. In total, there are 1,274 A/H segments.
In particular, the duration of segment varies but it is brief with an average of ${4.25 \pm 2.47}$ seconds which is equivalent to ${102.92 \pm 59.16}$ frames. The minimum and maximum A/H segment is 0.01 seconds (1 frame), and 23.8 seconds (572 frames), respectively.

In terms of participants age, the dataset covers a large range from 18 to 66 years old. In particular, 37.1% of the participants covers the range 25-34 years, followed by the range of 35-44 years with 25.9%, then the range of 18-24 with 21.9%. In terms of sex, 59.8% are male, while 39.3 are female. As for ethnicity variation, White comes with 52.2% of the participants, followed by Asian with 21.0%, and Mixed with 11.6%, then Black with 10.3%. Large part of the participants are not students (65.2%) which limits common issues in recruit bias.

The public *BAH* dataset contains the row videos, detailed A/H annotation at video- and frame-level, cues, and per participant demographic information including age, birth country, Canada province where the participant lives, ethnicity, ethnicity simplified, sex, student status, consent to use recordings in publications.

<br />


<p align="center">
<a href="/material/bah-dataset/variability-1.png"><img src="{{ site.url }}/material/bah-dataset/variability-1.png"   alt="Dataset: variability" width="600"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/variability-2.png"><img src="{{ site.url }}/material/bah-dataset/variability-2.png"   alt="Dataset: variability" width="600"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/variability-3.png"><img src="{{ site.url }}/material/bah-dataset/variability-3.png"   alt="Dataset: variability" width="600"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/variability-4.png"><img src="{{ site.url }}/material/bah-dataset/variability-4.png"   alt="Dataset: variability" width="600"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/variability-5.png"><img src="{{ site.url }}/material/bah-dataset/variability-5.png"   alt="Dataset: variability" width="600"></a>
</p>


### *BAH*: Experimental Protocol
**Dataset split**. The dataset is divided randomly based on participants into 3 sets: train, validation and test set. The train and validation sets amounts to 3/4 of the total participants, while 1/4 goes to the test set. Videos of one participants belong to one and one set only. The details of each set is presented in the following tables. The split files are provided along with the dataset files. They contain the split in terms of videos and frames ready to use. Note that the dataset is highly imbalanced, especially at frame level where only 18.15% contains A/H. This factor should be accounted for during training and evaluation. The dataset can be used for training at video- and/or frame-level. The participant identifiers are provided in the splits allowing subject-based learning scenarios.

**Evaluation metrics**. We refer here to the positive class as the class with label 1 indicating the presence of A/H, while negative class is the class 0 indicating the absence of A/H.
To account for the imbalance in *BAH* dataset, we use adapted standard evaluation metrics: - F1 score of the positive class. - Weighted F1 (WF1) score which is a weighted average of \F1 of the positive and negative class. - Average precision score (AP) of the positive class which accounts for the performance sensitivity to the model's confidence. For AP score, a threshold list between 0 and 1 is used with a step of 0.001. Evaluation code of all measures is provided along with the public code of this dataset.

<br />

<p align="center">
<a href="/material/bah-dataset/dataset-split.png"><img src="{{ site.url }}/material/bah-dataset/dataset-split.png"   alt="Dataset: splits" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-dataset/dataset-imbalance.png"><img src="{{ site.url }}/material/bah-dataset/dataset-imbalance.png"   alt="Dataset: imbalance" width="800"></a>
</p>



### Experiments: Baselines
#### 1) Frame-level supervised classification using multimodal

<p align="center">
<a href="/material/bah-dataset/multimodal.png"><img src="{{ site.url }}/material/bah-dataset/multimodal.png"   alt="Dataset: multimodal" width="900"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-datset/frame-multimodal.png"><img src="{{ site.url }}/material/bah-dataset/frame-multimodal.png"   alt="Dataset: Frame - multimodal" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-datset/frame-fusion.png"><img src="{{ site.url }}/material/bah-dataset/frame-fusion.png"   alt="Dataset: Frame - fusion" width="800"></a>
</p>

<br />

#### 2) Video-level supervised classification using multimodal

<p align="center">
<a href="/material/bah-datset/video-performance.png"><img src="{{ site.url }}/material/bah-dataset/video-performance.png"   alt="Dataset: Video - performance" width="800"></a>
</p>


#### 3) Zero-shot performance: Frame- & video-level

<p align="center">
<a href="/material/bah-datset/zero-shot-frame.png"><img src="{{ site.url }}/material/bah-dataset/zero-shot-frame.png"   alt="Dataset: Zero shot - frame - performance" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/bah-datset/zero-shot-video.png"><img src="{{ site.url }}/material/bah-dataset/zero-shot-video.png"   alt="Dataset: Zero shot - video - performance" width="800"></a>
</p>


#### 4) Personalization using domain adaptation (frame-level)

<p align="center">
<a href="/material/bah-datset/personalization-da.png"><img src="{{ site.url }}/material/bah-dataset/personalization-da.png"   alt="Dataset: Personalization- domain adaptation - performance" width="800"></a>
</p>



### Conclusion

This work introduces a new and unique multimodal and subject-based video dataset, *BAH*, for A/H recognition in videos.
*BAH* contains 224 participants across 9 provinces in Canada. Recruited participants answer 7 designed questions to elicit A/H while recording themselves via webcam and microphone via our web-platform. The dataset amounts to 1,118 videos for a total duration of 8.26 hours with 1.5 hours of A/H. It was annotated by our behavioural team at video- and frame-level.

Our initial benchmarking yielded limited performance highlighting the difficulty of A/H recognition. Our results showed also that leveraging context, multimodality, and adapted feature fusion is a first good direction to design robust models. Our dataset and code are made public.


### Acknowledgments
This work was supported in part by the Fonds de recherche du Québec – Santé, the Natural Sciences and Engineering Research Council of Canada, Canada Foundation for Innovation, and the Digital Research Alliance of Canada. We thank interns that participated in the dataset annotation: Jessica Almeida (Concordia University, Université du Québec à Montréal), and Laura Lucia Ortiz (MBMC).
