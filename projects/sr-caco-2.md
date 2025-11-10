---
layout: datasets
permalink: /sr-caco-2/
title: "SR-CACO-2: A Dataset for Confocal Fluorescence Microscopy Image Super-Resolution (NeurIPS2024)"
tags: [SR-CACO-2, SR-CACO-2 Dataset, New Dataset, Confocal Fluorescence Microscopy, Image Super-resolution, Deep Learning, Single Image Super-resolution, SISR, Benchmark, NeurIPS, NeurIPS 2024, Code, Github, Hugging Face]
comments: false
---
by **Soufiane Belharbi<sup>1</sup>, Mara KM Whitford<sup>2,3</sup>,
Phuong Hoang<sup>2</sup>, Shakeeb Murtaza<sup>1</sup>, Luke McCaffrey<sup>2,
3,4</sup>, Eric Granger<sup>1</sup>**

<br />

<sup>1</sup>  LIVIA, ILLS, Dept. of Systems Engineering, ETS Montreal, Canada
<br/>
<sup>2</sup>  Goodman Cancer Institute, McGill University, Montreal, Canada
<br/>
<sup>3</sup>  Dept. of Biochemistry, McGill University, Montreal, Canada
<br/>
<sup>4</sup>  Gerald Bronfman Dept. of Oncology, McGill University, Montreal,
Canada



[![Download](https://img.shields.io/badge/Download-blue?logo=openaccess)](https://github.com/LIVIAETS/sr-caco-2?tab=readme-ov-file#download-sr-caco-2)
[![arXiv](https://img.shields.io/badge/arXiv-2406.09168-b31b1b.svg?logo=arxiv&logoColor=B31B1B)](https://arxiv.org/pdf/2406.09168)
[![Github](https://img.shields.io/badge/Github-sr--caco--2-brightgreen.svg?logo=github)](https://github.com/LIVIAETS/sr-caco-2)
[![Hugging Face Spaces](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Weights-yellow)](https://huggingface.co/sbelharbi/sr-caco-2)
[![DOI](https://zenodo.org/badge/810271648.svg)](https://zenodo.org/doi/10.5281/zenodo.11617172) [[v1.0.0]](https://github.com/LIVIAETS/sr-caco-2/releases/tag/v1.0.0)

<br />

<p align="center">
  <a href="/material/sr-caco-2/patch-demo.png"><img src="{{ site.url }}/material/sr-caco-2/patch-demo.png" alt="Dataset: Demo" width="800"> </a>
</p>

<br />

<p align="center">
  <a href="/material/sr-caco-2/nutrition-label.png"><img src="{{ site.url }}/material/sr-caco-2/nutrition-label.png" alt="Dataset: Nutrition label" width="600"> </a>
</p>

<br />

{% assign lb = "{" %}
{% assign rb = "}" %}
{{ foo }}

```bibtex
@inproceedings{belharbi24-sr-caco-2,
  title="{{ lb }}SR-CACO-2{{ rb }}: A Dataset for Confocal Fluorescence Microscopy Image Super-Resolution",
  author="Belharbi, S. and Whitford, M.K.M. and Hoang, P. and Murtaza, S. and McCaffrey, L. and Granger, E.",
  booktitle="NeurIPS",
  year="2024"
}
```


<!-- <a href="javascript:toggleBibtex('belharbi24-sr-caco-2')">[BibTeX]</a>

<div id="bib_belharbi24-sr-caco-2" class="bibtex noshow">
<pre>
@inproceedings{belharbi24-sr-caco-2,
  title={SR-CACO-2: A Dataset for Confocal Fluorescence Microscopy Image Super-Resolution},
  author={Belharbi, S. and Whitford, M.K.M. and Hoang, P. and Murtaza, S.
  and McCaffrey, L. and Granger, E.},
  booktitle={NeurIPS},
  year={2024}
}
</pre>
</div> -->




### Abstract

Confocal fluorescence microscopy is one of the most accessible and widely used imaging techniques for the study of biological processes at the cellular and subcellular levels. Scanning confocal microscopy allows the capture of high-quality images from thick three-dimensional (3D) samples, yet suffers from well-known limitations such as photobleaching and phototoxicity of specimens caused by intense light exposure, which limits its use in some applications, especially for living cells. Cellular damage can be alleviated by changing imaging parameters to reduce light exposure, often at the expense of image quality. Machine/deep learning methods for single-image super-resolution (SISR) can be applied to restore image quality by upscaling lower-resolution (LR) images to produce high-resolution images (HR). These SISR methods have been successfully applied to photo-realistic images due partly to the abundance of publicly available datasets. In contrast, the lack of publicly available data partly limits their application and success in scanning confocal microscopy. In this paper, we introduce a large scanning confocal microscopy dataset named SR-CACO-2 that is comprised of low- and high-resolution image pairs marked for three different fluorescent markers. It allows to evaluate the performance of SISR methods on three different upscaling levels (X2, x34, x8). SR-CACO-2 contains the human epithelial cell line Caco-2 (ATCC HTB-37), and it is composed of 2,200 unique images, captured with four resolutions and three markers, that have been translated in the form of 9,937 patches for experiments with SISR methods. Given the new SR-CACO-2 dataset, we also provide benchmarking results for 16 state-of-the-art methods that are representative of the main SISR families. Results show that these methods have limited success in producing high-resolution textures, indicating that SR-CACO-2 represents a challenging problem. The dataset is released under a Creative Commons license (CC BY-NC-SA 4.0), and it can be accessed freely. Our dataset, code and pretrained weights for SISR methods are publicly available: [github.com/sbelharbi/sr-caco-2](https://github.com/LIVIAETS/sr-caco-2).

### License / Download
**THIS SR-CACO-2 DATASET IS LICENSED UNDER CREATIVE COMMONS
ATTRIBUTION-NONCOMMERCIAL-SHAREALIKE 4.0 INTERNATIONAL LICENSE (CC BY-NC-SA 4.0).
[HTTPS://CREATIVECOMMONS.ORG/LICENSES/BY-NC-SA/4.0/](HTTPS://CREATIVECOMMONS.ORG/LICENSES/BY-NC-SA/4.0/)**

<p align="center"><img src="/material/sr-caco-2/LICENSE.png" alt="outline" width="20%"></p>

The download link can be found at: [Download SR-CACO-2](https://github.com/LIVIAETS/sr-caco-2?tab=readme-ov-file#download-sr-caco-2).


### Poster
<p align="center">
<a href="/material/sr-caco-2/poster.pdf"><img src="{{ site.url }}/material/sr-caco-2/poster-thumbnail.png"   alt="poster" width="400"></a>
</p>

### Slides
<p align="center">
<a href="/material/sr-caco-2/slides.pdf"><img src="{{ site.url }}/material/sr-caco-2/slides-thumbnail.png"   alt="poster" width="400"></a>
</p>

### SR-CACO-2: Capture
<p align="center">
<a href="/material/sr-caco-2/data-capturing.png"><img src="{{ site.url }}/material/sr-caco-2/data-capturing.png"   alt="Dataset capture" width="800"></a>
</p>

### SR-CACO-2: Diversity
During the acquisition of SR-CACO-2, we ensured the technical and biological diversity of samples. To automate the image acquisition, we programmed the microscope to capture multiple sets of 100 images. Each set of 100 images was stitched together (10 × 10) to form an image tile. Therefore, each tile represents 100 unique images (fields of view) and the 22 tiles correspond to 2,200 unique images. Each image is captured at four scales and for three markers. The automatic collection of a tile of the 4 different resolutions takes over ∼12-16 hours. We note that each tile was captured in a multi-well plate. The 22 wells were collected from 4 independent experiments using 5-6 wells per plate/experiment, ensuring adequate and standard biological diversity.

To further assess the diversity of our dataset, we performed an object-based analysis of cellular structures captured in the image dataset. The 2,200 ((22 × 10 × 10) unique image fields of view at the high resolution contain ∼16,800 multi-cellular objects.

The cells were cultivated in a three-dimensional protein matrix that allows them to form tissue-like cyst structures that resemble the natural organization of cells in tissues and organs, such as the colon, lung, breast, etc. Cells grown in a three-dimensional matrix exhibit spontaneous variations in cyst size and organization (hollow or solid). We recently reported multiple cellular phenotypes in Caco2 cells that resemble tissue geometries found in healthy and disease states. Our dataset contains cysts with size variations over 2 orders of magnitude. Moreover, shape analysis of the cysts demonstrates substantial variation in aspect ratio and circularity. This reflects cysts covering a spectrum of phenotypes, including single-layered, multi-layered, and solid. This contrasts with cells grown as two-dimensional cultures on plastic or glass surfaces, where there is substantially less variation in size and organization when viewing single cells or confluent patches as is often used in other recently published microscopy datasets. The next figure shows the analysis of the cells in the SR-CACO-2 dataset. We can observe from these plots that the cells span a large size range with a relatively circular shape.

<br />

<p align="center">
<a href="/material/sr-caco-2/object-analysis.png"><img src="{{ site.url }}/material/sr-caco-2/object-analysis.png"   alt="Dataset: Object analysis" width="600"></a>
</p>


### SR-CACO-2: Patch extraction/Distribution

<p align="center">
<a href="/material/sr-caco-2/patching.png"><img src="{{ site.url }}/material/sr-caco-2/patching.png"   alt="Dataset: Patch extraction" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/distribution.png"><img src="{{ site.url }}/material/sr-caco-2/distribution.png"   alt="Dataset: Patches distribution" width="800"></a>
</p>


### SR-CACO-2: Low-Resolution Images: Interpolation vs Microscope
We conducted an empirical analysis to compare both images: real (microscopic) LR vs. bicubic LR. Here are some relevant observations:


* Pixel-intensity difference: both LR types are different. Their absolute pixel-wise difference value can be in [0, 50] as well as [200, 255] (see the \|REAL - BICUBIC\| histogram in next figure). The difference is mainly concentrated over cell regions.
* Compared to real LR, bicubic LR can maintain better cell structure and even full cells from the HR images (see the real and bicubic images in next figure).
* Intensity span: depending on the image, the real LR images are sometimes much more expressive in terms of pixel intensity as they span larger intensities compared to bicubic LR (see the pixel-intensity histogram in next figure).
* Real LR images are more noisy compared to bicubic LR ones which tend to be very smooth (see the visual result of the Laplace filter, and the histogram of its absolute value \|Laplace LR\| in next figure). Note that the noise in real LR is the results of a single scan while HR are scanned 9 times to be averaged.


This large contrast between real and bicubic LR only confirms that bicubic LR cannot be used as a replacement to substitute real LR images for training and evaluation, as done in SR methods over natural scene images. Real LR images must be used to effectively simulate a realistic scenario for the model at deployment time. Therefore our collection of real LR images is extremely valuable to designing realistic SR models.

<br />

<p align="center">
<a href="/material/sr-caco-2/interpolation-vs-microscope.png"><img src="{{ site.url }}/material/sr-caco-2/interpolation-vs-microscope.png"   alt="Dataset: Interpolation vs Microscope" width="800"></a>
</p>


### SR-CACO-2: Statistics

<p align="center">
<a href="/material/sr-caco-2/area.png"><img src="{{ site.url }}/material/sr-caco-2/area.png"   alt="Dataset: ROI size" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/file-tree.png"><img src="{{ site.url }}/material/sr-caco-2/file-tree.png"   alt="Dataset: File tree" width="800"></a>
</p>


### Experiments: SISR
<p align="center">
<a href="/material/sr-caco-2/roi-perf.png"><img src="{{ site.url }}/material/sr-caco-2/roi-perf.png"   alt="Dataset: ROI super-resolution performance" width="900"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/prediction.png"><img src="{{ site.url }}/material/sr-caco-2/prediction.png"   alt="Dataset: Super-resolution prediction" width="800"></a>
</p>


### Experiments: Downstream tasks (cell detection/segmentation)

<p align="center">
<a href="/material/sr-caco-2/cell-detect-cell2.png"><img src="{{ site.url }}/material/sr-caco-2/cell-detect-cell2.png"   alt="Dataset: Cell detection (CELL2)" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/cell-detect-cell0.png"><img src="{{ site.url }}/material/sr-caco-2/cell-detect-cell0.png"   alt="Dataset: Cell detection (CELL0)" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/under-over-cell-segmentation.png"><img src="{{ site.url }}/material/sr-caco-2/under-over-cell-segmentation.png"   alt="Dataset: Cell segmentation (CELL0, CELL2, X2)" width="800"></a>
</p>

<br />

<p align="center">
<a href="/material/sr-caco-2/cell-segmentation.png"><img src="{{ site.url }}/material/sr-caco-2/cell-segmentation.png"   alt="Dataset: Cell segmentation (CELL2, X2)" width="800"></a>
</p>


### Conclusion

The few existing datasets for SISR microscopy are mostly private which limits research advancements.
Our work seeks to address this gap. In particular, we propose a new dataset, SR-CACO-2, for Confocal Fluorescence Microscopy Image Super-Resolution. It contains 3 scales (\X2, \X4, and \X8, in addition to HR) with three protein markers in different lighting conditions and about 9k real pairs of LR/HR patches. The procedure for data capture and the experimental protocol for the evaluation of SISR methods follow standard practices, in addition to being reproducible.

Our benchmarking of state-of-the-art SISR methods indicates that they cannot accurately produce the HR images, making this new dataset extremely challenging. Aside from the evaluation of quality for super-resolved images, we conducted further analysis to assess their performance in downstream biology tasks such as cell segmentation. Several methods achieved promising results compared to LR and HR images over cell detection/segmentation tasks.

SR-CACO-2 dataset can contribute to driving progress in the design of SISR models for microscopy. This extends from fixed-imaging to live-imaging. SISR models trained with our dataset can be employed for live-imaging videos captured with low quality under reduced light exposure to preserve cells. This leads to fast imaging which allows for the observation of instantaneous inter-cellular events with less damage to the cells. Accurately upscaling these videos with SISR models may ultimately open the door to performing biological tasks such as cell tracking, counting, and segmentation.


### Acknowledgments
This research was supported in part by the Canadian Institutes of Health Research, the Natural Sciences and Engineering Research Council of Canada, and the Digital Research Alliance of Canada.
