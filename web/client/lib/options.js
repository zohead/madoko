// koka generated module: "options"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_env', './std_dict', './std_flags', './std_regex', './std_string', './std_path', './common'], function($std_core, $std_log, $std_env, $std_dict, $std_flags, $std_regex, $std_string, $std_path, $common) {
"use strict";
 
// koka declarations:
function Bst(styleName, locale)  /* (styleName : string, locale : string) -> bibstyle */  {
  return { _tag: 1, styleName: styleName, locale: locale };
}
function Csl(styleName, locale)  /* (styleName : string, locale : string) -> bibstyle */  {
  return { _tag: 2, styleName: styleName, locale: locale };
}
var Static = 1;  /* mathmode */ 
var Dynamic = 2;  /* mathmode */ 
function Mathoptions(mode, render, renderFull, mathjax, mjext, imgDir, scale, scalePng, scaleSvg, dpi, baseline, embedLimit, docClass, svgShare, svgPrec, svgDefs, svgFontFormat, svgBBoxExact, concurrency, dvipng, dvisvg, latex, latexFull, dvips, ps2pdf, convert, dim)  /* (mode : mathmode, render : maybe<common/mathrender>, renderFull : maybe<common/mathrender>, mathjax : string, mjext : string, imgDir : string, scale : int, scalePng : int, scaleSvg : int, dpi : int, baseline : int, embedLimit : int, docClass : string, svgShare : bool, svgPrec : int, svgDefs : string, svgFontFormat : string, svgBBoxExact : bool, concurrency : int, dvipng : string, dvisvg : string, latex : string, latexFull : string, dvips : string, ps2pdf : string, convert : string, dim : std/dict/dict<common/mathinfo>) -> mathoptions */  {
  return { mode: mode, render: render, renderFull: renderFull, mathjax: mathjax, mjext: mjext, imgDir: imgDir, scale: scale, scalePng: scalePng, scaleSvg: scaleSvg, dpi: dpi, baseline: baseline, embedLimit: embedLimit, docClass: docClass, svgShare: svgShare, svgPrec: svgPrec, svgDefs: svgDefs, svgFontFormat: svgFontFormat, svgBBoxExact: svgBBoxExact, concurrency: concurrency, dvipng: dvipng, dvisvg: dvisvg, latex: latex, latexFull: latexFull, dvips: dvips, ps2pdf: ps2pdf, convert: convert, dim: dim };
}
function Options(version, bench, verbose, verboseMaxLine, pedantic, sanitize, xmp, full, tex, pdf, texzip, rebuild, sandbox, prelude, title, css, scripts, scriptsx, htmlHeader, cssHeader, jsHeader, htmlFooter, jsFooter, htmlMeta, texHeader, texHeaderx, texDocHeader, texDocHeaderx, texFooter, texSectionNum, bibStyle, bib, locale, packages, packagesx, docClass, citestyle, citeAll, tocDepth, headingDepth, headingBase, sectionMax, sectionBase, starBold, prettyAlign, logo, math, highlight, hilitelang, pdflatex, bibtex, latex, processTimeout, zip, metadata, embedinfos, embedLimit, lineNo, lineNoWeb, copyStyles, lineMap, extractStart, extractEnd)  /* (version : string, bench : bool, verbose : int, verboseMaxLine : int, pedantic : bool, sanitize : bool, xmp : bool, full : maybe<bool>, tex : bool, pdf : bool, texzip : bool, rebuild : bool, sandbox : bool, prelude : string, title : string, css : string, scripts : string, scriptsx : string, htmlHeader : string, cssHeader : string, jsHeader : string, htmlFooter : string, jsFooter : string, htmlMeta : string, texHeader : string, texHeaderx : string, texDocHeader : string, texDocHeaderx : string, texFooter : string, texSectionNum : bool, bibStyle : bibstyle, bib : string, locale : string, packages : string, packagesx : string, docClass : string, citestyle : maybe<common/citestyle>, citeAll : bool, tocDepth : int, headingDepth : int, headingBase : int, sectionMax : int, sectionBase : int, starBold : bool, prettyAlign : int, logo : bool, math : mathoptions, highlight : bool, hilitelang : string, pdflatex : string, bibtex : string, latex : string, processTimeout : int, zip : string, metadata : metadata, embedinfos : std/dict/dict<common/embedinfo>, embedLimit : int, lineNo : int, lineNoWeb : bool, copyStyles : bool, lineMap : common/lineMap, extractStart : string, extractEnd : string) -> options */  {
  return { version: version, bench: bench, verbose: verbose, verboseMaxLine: verboseMaxLine, pedantic: pedantic, sanitize: sanitize, xmp: xmp, full: full, tex: tex, pdf: pdf, texzip: texzip, rebuild: rebuild, sandbox: sandbox, prelude: prelude, title: title, css: css, scripts: scripts, scriptsx: scriptsx, htmlHeader: htmlHeader, cssHeader: cssHeader, jsHeader: jsHeader, htmlFooter: htmlFooter, jsFooter: jsFooter, htmlMeta: htmlMeta, texHeader: texHeader, texHeaderx: texHeaderx, texDocHeader: texDocHeader, texDocHeaderx: texDocHeaderx, texFooter: texFooter, texSectionNum: texSectionNum, bibStyle: bibStyle, bib: bib, locale: locale, packages: packages, packagesx: packagesx, docClass: docClass, citestyle: citestyle, citeAll: citeAll, tocDepth: tocDepth, headingDepth: headingDepth, headingBase: headingBase, sectionMax: sectionMax, sectionBase: sectionBase, starBold: starBold, prettyAlign: prettyAlign, logo: logo, math: math, highlight: highlight, hilitelang: hilitelang, pdflatex: pdflatex, bibtex: bibtex, latex: latex, processTimeout: processTimeout, zip: zip, metadata: metadata, embedinfos: embedinfos, embedLimit: embedLimit, lineNo: lineNo, lineNoWeb: lineNoWeb, copyStyles: copyStyles, lineMap: lineMap, extractStart: extractStart, extractEnd: extractEnd };
}
function CommandOptions(showVersion, convertTex, outputDir, installDir, inputs, options)  /* (showVersion : bool, convertTex : bool, outputDir : string, installDir : string, inputs : list<string>, options : options) -> commandOptions */  {
  return { showVersion: showVersion, convertTex: convertTex, outputDir: outputDir, installDir: installDir, inputs: inputs, options: options };
}
 
// Automatically generated. Retrieves the `styleName` constructor field of the ":bibstyle" type.
function styleName(bibstyle0)  /* (bibstyle : bibstyle) -> string */  {
  return (bibstyle0._tag === 1) ? bibstyle0.styleName : bibstyle0.styleName;
}
 
// Automatically generated. Retrieves the `locale` constructor field of the ":bibstyle" type.
function locale(bibstyle0)  /* (bibstyle : bibstyle) -> string */  {
  return (bibstyle0._tag === 1) ? bibstyle0.locale : bibstyle0.locale;
}
 
// Automatically generated. Tests for the "Bst" constructor of the ":bibstyle" type.
function isBst(bibstyle0)  /* (bibstyle : bibstyle) -> bool */  {
  return (bibstyle0._tag === 1);
}
 
// Automatically generated. Tests for the "Csl" constructor of the ":bibstyle" type.
function isCsl(bibstyle0)  /* (bibstyle : bibstyle) -> bool */  {
  return (bibstyle0._tag === 2);
}
 
// Automatically generated. Tests for the "Static" constructor of the ":mathmode" type.
function isStatic(mathmode)  /* (mathmode : mathmode) -> bool */  {
  return (mathmode === 1);
}
 
// Automatically generated. Tests for the "Dynamic" constructor of the ":mathmode" type.
function isDynamic(mathmode)  /* (mathmode : mathmode) -> bool */  {
  return (mathmode === 2);
}
 
// Automatically generated. Retrieves the `mode` constructor field of the ":mathoptions" type.
function mode(mathoptions)  /* (mathoptions : mathoptions) -> mathmode */  {
  return mathoptions.mode;
}
 
// Automatically generated. Retrieves the `render` constructor field of the ":mathoptions" type.
function render(mathoptions)  /* (mathoptions : mathoptions) -> maybe<common/mathrender> */  {
  return mathoptions.render;
}
 
// Automatically generated. Retrieves the `renderFull` constructor field of the ":mathoptions" type.
function renderFull(mathoptions)  /* (mathoptions : mathoptions) -> maybe<common/mathrender> */  {
  return mathoptions.renderFull;
}
 
// Automatically generated. Retrieves the `mathjax` constructor field of the ":mathoptions" type.
function mathjax(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.mathjax;
}
 
// Automatically generated. Retrieves the `mjext` constructor field of the ":mathoptions" type.
function mjext(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.mjext;
}
 
// Automatically generated. Retrieves the `imgDir` constructor field of the ":mathoptions" type.
function imgDir(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.imgDir;
}
 
// Automatically generated. Retrieves the `scale` constructor field of the ":mathoptions" type.
function scale(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scale;
}
 
// Automatically generated. Retrieves the `scalePng` constructor field of the ":mathoptions" type.
function scalePng(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scalePng;
}
 
// Automatically generated. Retrieves the `scaleSvg` constructor field of the ":mathoptions" type.
function scaleSvg(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.scaleSvg;
}
 
// Automatically generated. Retrieves the `dpi` constructor field of the ":mathoptions" type.
function dpi(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.dpi;
}
 
// Automatically generated. Retrieves the `baseline` constructor field of the ":mathoptions" type.
function baseline(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.baseline;
}
 
// Automatically generated. Retrieves the `embedLimit` constructor field of the ":mathoptions" type.
function embedLimit(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.embedLimit;
}
 
// Automatically generated. Retrieves the `docClass` constructor field of the ":mathoptions" type.
function docClass(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.docClass;
}
 
// Automatically generated. Retrieves the `svgShare` constructor field of the ":mathoptions" type.
function svgShare(mathoptions)  /* (mathoptions : mathoptions) -> bool */  {
  return mathoptions.svgShare;
}
 
// Automatically generated. Retrieves the `svgPrec` constructor field of the ":mathoptions" type.
function svgPrec(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.svgPrec;
}
 
// Automatically generated. Retrieves the `svgDefs` constructor field of the ":mathoptions" type.
function svgDefs(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.svgDefs;
}
 
// Automatically generated. Retrieves the `svgFontFormat` constructor field of the ":mathoptions" type.
function svgFontFormat(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.svgFontFormat;
}
 
// Automatically generated. Retrieves the `svgBBoxExact` constructor field of the ":mathoptions" type.
function svgBBoxExact(mathoptions)  /* (mathoptions : mathoptions) -> bool */  {
  return mathoptions.svgBBoxExact;
}
 
// Automatically generated. Retrieves the `concurrency` constructor field of the ":mathoptions" type.
function concurrency(mathoptions)  /* (mathoptions : mathoptions) -> int */  {
  return mathoptions.concurrency;
}
 
// Automatically generated. Retrieves the `dvipng` constructor field of the ":mathoptions" type.
function dvipng(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvipng;
}
 
// Automatically generated. Retrieves the `dvisvg` constructor field of the ":mathoptions" type.
function dvisvg(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvisvg;
}
 
// Automatically generated. Retrieves the `latex` constructor field of the ":mathoptions" type.
function latex(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.latex;
}
 
// Automatically generated. Retrieves the `latexFull` constructor field of the ":mathoptions" type.
function latexFull(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.latexFull;
}
 
// Automatically generated. Retrieves the `dvips` constructor field of the ":mathoptions" type.
function dvips(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.dvips;
}
 
// Automatically generated. Retrieves the `ps2pdf` constructor field of the ":mathoptions" type.
function ps2pdf(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.ps2pdf;
}
 
// Automatically generated. Retrieves the `convert` constructor field of the ":mathoptions" type.
function convert(mathoptions)  /* (mathoptions : mathoptions) -> string */  {
  return mathoptions.convert;
}
 
// Automatically generated. Retrieves the `dim` constructor field of the ":mathoptions" type.
function dim(mathoptions)  /* (mathoptions : mathoptions) -> std/dict/dict<common/mathinfo> */  {
  return mathoptions.dim;
}
function _copy(_this, mode0, render0, renderFull0, mathjax0, mjext0, imgDir0, scale0, scalePng0, scaleSvg0, dpi0, baseline0, embedLimit0, docClass0, svgShare0, svgPrec0, svgDefs0, svgFontFormat0, svgBBoxExact0, concurrency0, dvipng0, dvisvg0, latex0, latexFull0, dvips0, ps2pdf0, convert0, dim0)  /* (mathoptions, mode : ?mathmode, render : ?maybe<common/mathrender>, renderFull : ?maybe<common/mathrender>, mathjax : ?string, mjext : ?string, imgDir : ?string, scale : ?int, scalePng : ?int, scaleSvg : ?int, dpi : ?int, baseline : ?int, embedLimit : ?int, docClass : ?string, svgShare : ?bool, svgPrec : ?int, svgDefs : ?string, svgFontFormat : ?string, svgBBoxExact : ?bool, concurrency : ?int, dvipng : ?string, dvisvg : ?string, latex : ?string, latexFull : ?string, dvips : ?string, ps2pdf : ?string, convert : ?string, dim : ?std/dict/dict<common/mathinfo>) -> mathoptions */  {
  var mode_455 = (mode0 !== undefined) ? mode0 : mode(_this);
  var render_461 = (render0 !== undefined) ? render0 : render(_this);
  var renderFull_467 = (renderFull0 !== undefined) ? renderFull0 : renderFull(_this);
  var mathjax_473 = (mathjax0 !== undefined) ? mathjax0 : mathjax(_this);
  var mjext_479 = (mjext0 !== undefined) ? mjext0 : mjext(_this);
  var imgDir_485 = (imgDir0 !== undefined) ? imgDir0 : imgDir(_this);
  var scale_491 = (scale0 !== undefined) ? scale0 : scale(_this);
  var scalePng_497 = (scalePng0 !== undefined) ? scalePng0 : scalePng(_this);
  var scaleSvg_503 = (scaleSvg0 !== undefined) ? scaleSvg0 : scaleSvg(_this);
  var dpi_509 = (dpi0 !== undefined) ? dpi0 : dpi(_this);
  var baseline_515 = (baseline0 !== undefined) ? baseline0 : baseline(_this);
  var embedLimit_521 = (embedLimit0 !== undefined) ? embedLimit0 : embedLimit(_this);
  var docClass_527 = (docClass0 !== undefined) ? docClass0 : docClass(_this);
  var svgShare_533 = (svgShare0 !== undefined) ? svgShare0 : svgShare(_this);
  var svgPrec_539 = (svgPrec0 !== undefined) ? svgPrec0 : svgPrec(_this);
  var svgDefs_545 = (svgDefs0 !== undefined) ? svgDefs0 : svgDefs(_this);
  var svgFontFormat_551 = (svgFontFormat0 !== undefined) ? svgFontFormat0 : svgFontFormat(_this);
  var svgBBoxExact_557 = (svgBBoxExact0 !== undefined) ? svgBBoxExact0 : svgBBoxExact(_this);
  var concurrency_563 = (concurrency0 !== undefined) ? concurrency0 : concurrency(_this);
  var dvipng_569 = (dvipng0 !== undefined) ? dvipng0 : dvipng(_this);
  var dvisvg_575 = (dvisvg0 !== undefined) ? dvisvg0 : dvisvg(_this);
  var latex_581 = (latex0 !== undefined) ? latex0 : latex(_this);
  var latexFull_587 = (latexFull0 !== undefined) ? latexFull0 : latexFull(_this);
  var dvips_593 = (dvips0 !== undefined) ? dvips0 : dvips(_this);
  var ps2pdf_599 = (ps2pdf0 !== undefined) ? ps2pdf0 : ps2pdf(_this);
  var convert_605 = (convert0 !== undefined) ? convert0 : convert(_this);
  var dim_611 = (dim0 !== undefined) ? dim0 : dim(_this);
  return Mathoptions(mode_455, render_461, renderFull_467, mathjax_473, mjext_479, imgDir_485, scale_491, scalePng_497, scaleSvg_503, dpi_509, baseline_515, embedLimit_521, docClass_527, svgShare_533, svgPrec_539, svgDefs_545, svgFontFormat_551, svgBBoxExact_557, concurrency_563, dvipng_569, dvisvg_575, latex_581, latexFull_587, dvips_593, ps2pdf_599, convert_605, dim_611);
}
 
// Automatically generated. Retrieves the `version` constructor field of the ":options" type.
function version(options0)  /* (options : options) -> string */  {
  return options0.version;
}
 
// Automatically generated. Retrieves the `bench` constructor field of the ":options" type.
function bench(options0)  /* (options : options) -> bool */  {
  return options0.bench;
}
 
// Automatically generated. Retrieves the `verbose` constructor field of the ":options" type.
function verbose(options0)  /* (options : options) -> int */  {
  return options0.verbose;
}
 
// Automatically generated. Retrieves the `verboseMaxLine` constructor field of the ":options" type.
function verboseMaxLine(options0)  /* (options : options) -> int */  {
  return options0.verboseMaxLine;
}
 
// Automatically generated. Retrieves the `pedantic` constructor field of the ":options" type.
function pedantic(options0)  /* (options : options) -> bool */  {
  return options0.pedantic;
}
 
// Automatically generated. Retrieves the `sanitize` constructor field of the ":options" type.
function sanitize(options0)  /* (options : options) -> bool */  {
  return options0.sanitize;
}
 
// Automatically generated. Retrieves the `xmp` constructor field of the ":options" type.
function xmp(options0)  /* (options : options) -> bool */  {
  return options0.xmp;
}
 
// Automatically generated. Retrieves the `full` constructor field of the ":options" type.
function full(options0)  /* (options : options) -> maybe<bool> */  {
  return options0.full;
}
 
// Automatically generated. Retrieves the `tex` constructor field of the ":options" type.
function tex(options0)  /* (options : options) -> bool */  {
  return options0.tex;
}
 
// Automatically generated. Retrieves the `pdf` constructor field of the ":options" type.
function pdf(options0)  /* (options : options) -> bool */  {
  return options0.pdf;
}
 
// Automatically generated. Retrieves the `texzip` constructor field of the ":options" type.
function texzip(options0)  /* (options : options) -> bool */  {
  return options0.texzip;
}
 
// Automatically generated. Retrieves the `rebuild` constructor field of the ":options" type.
function rebuild(options0)  /* (options : options) -> bool */  {
  return options0.rebuild;
}
 
// Automatically generated. Retrieves the `sandbox` constructor field of the ":options" type.
function sandbox(options0)  /* (options : options) -> bool */  {
  return options0.sandbox;
}
 
// Automatically generated. Retrieves the `prelude` constructor field of the ":options" type.
function prelude(options0)  /* (options : options) -> string */  {
  return options0.prelude;
}
 
// Automatically generated. Retrieves the `title` constructor field of the ":options" type.
function title(options0)  /* (options : options) -> string */  {
  return options0.title;
}
 
// Automatically generated. Retrieves the `css` constructor field of the ":options" type.
function css(options0)  /* (options : options) -> string */  {
  return options0.css;
}
 
// Automatically generated. Retrieves the `scripts` constructor field of the ":options" type.
function scripts(options0)  /* (options : options) -> string */  {
  return options0.scripts;
}
 
// Automatically generated. Retrieves the `scriptsx` constructor field of the ":options" type.
function scriptsx(options0)  /* (options : options) -> string */  {
  return options0.scriptsx;
}
 
// Automatically generated. Retrieves the `htmlHeader` constructor field of the ":options" type.
function htmlHeader(options0)  /* (options : options) -> string */  {
  return options0.htmlHeader;
}
 
// Automatically generated. Retrieves the `cssHeader` constructor field of the ":options" type.
function cssHeader(options0)  /* (options : options) -> string */  {
  return options0.cssHeader;
}
 
// Automatically generated. Retrieves the `jsHeader` constructor field of the ":options" type.
function jsHeader(options0)  /* (options : options) -> string */  {
  return options0.jsHeader;
}
 
// Automatically generated. Retrieves the `htmlFooter` constructor field of the ":options" type.
function htmlFooter(options0)  /* (options : options) -> string */  {
  return options0.htmlFooter;
}
 
// Automatically generated. Retrieves the `jsFooter` constructor field of the ":options" type.
function jsFooter(options0)  /* (options : options) -> string */  {
  return options0.jsFooter;
}
 
// Automatically generated. Retrieves the `htmlMeta` constructor field of the ":options" type.
function htmlMeta(options0)  /* (options : options) -> string */  {
  return options0.htmlMeta;
}
 
// Automatically generated. Retrieves the `texHeader` constructor field of the ":options" type.
function texHeader(options0)  /* (options : options) -> string */  {
  return options0.texHeader;
}
 
// Automatically generated. Retrieves the `texHeaderx` constructor field of the ":options" type.
function texHeaderx(options0)  /* (options : options) -> string */  {
  return options0.texHeaderx;
}
 
// Automatically generated. Retrieves the `texDocHeader` constructor field of the ":options" type.
function texDocHeader(options0)  /* (options : options) -> string */  {
  return options0.texDocHeader;
}
 
// Automatically generated. Retrieves the `texDocHeaderx` constructor field of the ":options" type.
function texDocHeaderx(options0)  /* (options : options) -> string */  {
  return options0.texDocHeaderx;
}
 
// Automatically generated. Retrieves the `texFooter` constructor field of the ":options" type.
function texFooter(options0)  /* (options : options) -> string */  {
  return options0.texFooter;
}
 
// Automatically generated. Retrieves the `texSectionNum` constructor field of the ":options" type.
function texSectionNum(options0)  /* (options : options) -> bool */  {
  return options0.texSectionNum;
}
 
// Automatically generated. Retrieves the `bibStyle` constructor field of the ":options" type.
function bibStyle(options0)  /* (options : options) -> bibstyle */  {
  return options0.bibStyle;
}
 
// Automatically generated. Retrieves the `bib` constructor field of the ":options" type.
function bib(options0)  /* (options : options) -> string */  {
  return options0.bib;
}
 
// Automatically generated. Retrieves the `locale` constructor field of the ":options" type.
function locale_1(options0)  /* (options : options) -> string */  {
  return options0.locale;
}
 
// Automatically generated. Retrieves the `packages` constructor field of the ":options" type.
function packages(options0)  /* (options : options) -> string */  {
  return options0.packages;
}
 
// Automatically generated. Retrieves the `packagesx` constructor field of the ":options" type.
function packagesx(options0)  /* (options : options) -> string */  {
  return options0.packagesx;
}
 
// Automatically generated. Retrieves the `docClass` constructor field of the ":options" type.
function docClass_1(options0)  /* (options : options) -> string */  {
  return options0.docClass;
}
 
// Automatically generated. Retrieves the `citestyle` constructor field of the ":options" type.
function citestyle(options0)  /* (options : options) -> maybe<common/citestyle> */  {
  return options0.citestyle;
}
 
// Automatically generated. Retrieves the `citeAll` constructor field of the ":options" type.
function citeAll(options0)  /* (options : options) -> bool */  {
  return options0.citeAll;
}
 
// Automatically generated. Retrieves the `tocDepth` constructor field of the ":options" type.
function tocDepth(options0)  /* (options : options) -> int */  {
  return options0.tocDepth;
}
 
// Automatically generated. Retrieves the `headingDepth` constructor field of the ":options" type.
function headingDepth(options0)  /* (options : options) -> int */  {
  return options0.headingDepth;
}
 
// Automatically generated. Retrieves the `headingBase` constructor field of the ":options" type.
function headingBase(options0)  /* (options : options) -> int */  {
  return options0.headingBase;
}
 
// Automatically generated. Retrieves the `sectionMax` constructor field of the ":options" type.
function sectionMax(options0)  /* (options : options) -> int */  {
  return options0.sectionMax;
}
 
// Automatically generated. Retrieves the `sectionBase` constructor field of the ":options" type.
function sectionBase(options0)  /* (options : options) -> int */  {
  return options0.sectionBase;
}
 
// Automatically generated. Retrieves the `starBold` constructor field of the ":options" type.
function starBold(options0)  /* (options : options) -> bool */  {
  return options0.starBold;
}
 
// Automatically generated. Retrieves the `prettyAlign` constructor field of the ":options" type.
function prettyAlign(options0)  /* (options : options) -> int */  {
  return options0.prettyAlign;
}
 
// Automatically generated. Retrieves the `logo` constructor field of the ":options" type.
function logo(options0)  /* (options : options) -> bool */  {
  return options0.logo;
}
 
// Automatically generated. Retrieves the `math` constructor field of the ":options" type.
function math(options0)  /* (options : options) -> mathoptions */  {
  return options0.math;
}
 
// Automatically generated. Retrieves the `highlight` constructor field of the ":options" type.
function highlight(options0)  /* (options : options) -> bool */  {
  return options0.highlight;
}
 
// Automatically generated. Retrieves the `hilitelang` constructor field of the ":options" type.
function hilitelang(options0)  /* (options : options) -> string */  {
  return options0.hilitelang;
}
 
// Automatically generated. Retrieves the `pdflatex` constructor field of the ":options" type.
function pdflatex(options0)  /* (options : options) -> string */  {
  return options0.pdflatex;
}
 
// Automatically generated. Retrieves the `bibtex` constructor field of the ":options" type.
function bibtex(options0)  /* (options : options) -> string */  {
  return options0.bibtex;
}
 
// Automatically generated. Retrieves the `latex` constructor field of the ":options" type.
function latex_1(options0)  /* (options : options) -> string */  {
  return options0.latex;
}
 
// Automatically generated. Retrieves the `processTimeout` constructor field of the ":options" type.
function processTimeout(options0)  /* (options : options) -> int */  {
  return options0.processTimeout;
}
 
// Automatically generated. Retrieves the `zip` constructor field of the ":options" type.
function zip(options0)  /* (options : options) -> string */  {
  return options0.zip;
}
 
// Automatically generated. Retrieves the `metadata` constructor field of the ":options" type.
function metadata(options0)  /* (options : options) -> metadata */  {
  return options0.metadata;
}
 
// Automatically generated. Retrieves the `embedinfos` constructor field of the ":options" type.
function embedinfos(options0)  /* (options : options) -> std/dict/dict<common/embedinfo> */  {
  return options0.embedinfos;
}
 
// Automatically generated. Retrieves the `embedLimit` constructor field of the ":options" type.
function embedLimit_1(options0)  /* (options : options) -> int */  {
  return options0.embedLimit;
}
 
// Automatically generated. Retrieves the `lineNo` constructor field of the ":options" type.
function lineNo(options0)  /* (options : options) -> int */  {
  return options0.lineNo;
}
 
// Automatically generated. Retrieves the `lineNoWeb` constructor field of the ":options" type.
function lineNoWeb(options0)  /* (options : options) -> bool */  {
  return options0.lineNoWeb;
}
 
// Automatically generated. Retrieves the `copyStyles` constructor field of the ":options" type.
function copyStyles(options0)  /* (options : options) -> bool */  {
  return options0.copyStyles;
}
 
// Automatically generated. Retrieves the `lineMap` constructor field of the ":options" type.
function lineMap(options0)  /* (options : options) -> common/lineMap */  {
  return options0.lineMap;
}
 
// Automatically generated. Retrieves the `extractStart` constructor field of the ":options" type.
function extractStart(options0)  /* (options : options) -> string */  {
  return options0.extractStart;
}
 
// Automatically generated. Retrieves the `extractEnd` constructor field of the ":options" type.
function extractEnd(options0)  /* (options : options) -> string */  {
  return options0.extractEnd;
}
function _copy_1(_this, version0, bench0, verbose0, verboseMaxLine0, pedantic0, sanitize0, xmp0, full0, tex0, pdf0, texzip0, rebuild0, sandbox0, prelude0, title0, css0, scripts0, scriptsx0, htmlHeader0, cssHeader0, jsHeader0, htmlFooter0, jsFooter0, htmlMeta0, texHeader0, texHeaderx0, texDocHeader0, texDocHeaderx0, texFooter0, texSectionNum0, bibStyle0, bib0, locale0, packages0, packagesx0, docClass0, citestyle0, citeAll0, tocDepth0, headingDepth0, headingBase0, sectionMax0, sectionBase0, starBold0, prettyAlign0, logo0, math0, highlight0, hilitelang0, pdflatex0, bibtex0, latex0, processTimeout0, zip0, metadata0, embedinfos0, embedLimit0, lineNo0, lineNoWeb0, copyStyles0, lineMap0, extractStart0, extractEnd0)  /* (options, version : ?string, bench : ?bool, verbose : ?int, verboseMaxLine : ?int, pedantic : ?bool, sanitize : ?bool, xmp : ?bool, full : ?maybe<bool>, tex : ?bool, pdf : ?bool, texzip : ?bool, rebuild : ?bool, sandbox : ?bool, prelude : ?string, title : ?string, css : ?string, scripts : ?string, scriptsx : ?string, htmlHeader : ?string, cssHeader : ?string, jsHeader : ?string, htmlFooter : ?string, jsFooter : ?string, htmlMeta : ?string, texHeader : ?string, texHeaderx : ?string, texDocHeader : ?string, texDocHeaderx : ?string, texFooter : ?string, texSectionNum : ?bool, bibStyle : ?bibstyle, bib : ?string, locale : ?string, packages : ?string, packagesx : ?string, docClass : ?string, citestyle : ?maybe<common/citestyle>, citeAll : ?bool, tocDepth : ?int, headingDepth : ?int, headingBase : ?int, sectionMax : ?int, sectionBase : ?int, starBold : ?bool, prettyAlign : ?int, logo : ?bool, math : ?mathoptions, highlight : ?bool, hilitelang : ?string, pdflatex : ?string, bibtex : ?string, latex : ?string, processTimeout : ?int, zip : ?string, metadata : ?metadata, embedinfos : ?std/dict/dict<common/embedinfo>, embedLimit : ?int, lineNo : ?int, lineNoWeb : ?bool, copyStyles : ?bool, lineMap : ?common/lineMap, extractStart : ?string, extractEnd : ?string) -> options */  {
  var version_1106 = (version0 !== undefined) ? version0 : version(_this);
  var bench_1112 = (bench0 !== undefined) ? bench0 : bench(_this);
  var verbose_1118 = (verbose0 !== undefined) ? verbose0 : verbose(_this);
  var verboseMaxLine_1124 = (verboseMaxLine0 !== undefined) ? verboseMaxLine0 : verboseMaxLine(_this);
  var pedantic_1130 = (pedantic0 !== undefined) ? pedantic0 : pedantic(_this);
  var sanitize_1136 = (sanitize0 !== undefined) ? sanitize0 : sanitize(_this);
  var xmp_1142 = (xmp0 !== undefined) ? xmp0 : xmp(_this);
  var full_1149 = (full0 !== undefined) ? full0 : full(_this);
  var tex_1156 = (tex0 !== undefined) ? tex0 : tex(_this);
  var pdf_1162 = (pdf0 !== undefined) ? pdf0 : pdf(_this);
  var texzip_1168 = (texzip0 !== undefined) ? texzip0 : texzip(_this);
  var rebuild_1174 = (rebuild0 !== undefined) ? rebuild0 : rebuild(_this);
  var sandbox_1180 = (sandbox0 !== undefined) ? sandbox0 : sandbox(_this);
  var prelude_1186 = (prelude0 !== undefined) ? prelude0 : prelude(_this);
  var title_1199 = (title0 !== undefined) ? title0 : title(_this);
  var css_1205 = (css0 !== undefined) ? css0 : css(_this);
  var scripts_1211 = (scripts0 !== undefined) ? scripts0 : scripts(_this);
  var scriptsx_1217 = (scriptsx0 !== undefined) ? scriptsx0 : scriptsx(_this);
  var htmlHeader_1223 = (htmlHeader0 !== undefined) ? htmlHeader0 : htmlHeader(_this);
  var cssHeader_1229 = (cssHeader0 !== undefined) ? cssHeader0 : cssHeader(_this);
  var jsHeader_1235 = (jsHeader0 !== undefined) ? jsHeader0 : jsHeader(_this);
  var htmlFooter_1241 = (htmlFooter0 !== undefined) ? htmlFooter0 : htmlFooter(_this);
  var jsFooter_1247 = (jsFooter0 !== undefined) ? jsFooter0 : jsFooter(_this);
  var htmlMeta_1253 = (htmlMeta0 !== undefined) ? htmlMeta0 : htmlMeta(_this);
  var texHeader_1259 = (texHeader0 !== undefined) ? texHeader0 : texHeader(_this);
  var texHeaderx_1265 = (texHeaderx0 !== undefined) ? texHeaderx0 : texHeaderx(_this);
  var texDocHeader_1271 = (texDocHeader0 !== undefined) ? texDocHeader0 : texDocHeader(_this);
  var texDocHeaderx_1277 = (texDocHeaderx0 !== undefined) ? texDocHeaderx0 : texDocHeaderx(_this);
  var texFooter_1283 = (texFooter0 !== undefined) ? texFooter0 : texFooter(_this);
  var texSectionNum_1289 = (texSectionNum0 !== undefined) ? texSectionNum0 : texSectionNum(_this);
  var bibStyle_1295 = (bibStyle0 !== undefined) ? bibStyle0 : bibStyle(_this);
  var bib_1301 = (bib0 !== undefined) ? bib0 : bib(_this);
  var locale_1314 = (locale0 !== undefined) ? locale0 : locale_1(_this);
  var packages_1320 = (packages0 !== undefined) ? packages0 : packages(_this);
  var packagesx_1326 = (packagesx0 !== undefined) ? packagesx0 : packagesx(_this);
  var docClass_1339 = (docClass0 !== undefined) ? docClass0 : docClass_1(_this);
  var citestyle_1347 = (citestyle0 !== undefined) ? citestyle0 : citestyle(_this);
  var citeAll_1353 = (citeAll0 !== undefined) ? citeAll0 : citeAll(_this);
  var tocDepth_1359 = (tocDepth0 !== undefined) ? tocDepth0 : tocDepth(_this);
  var headingDepth_1365 = (headingDepth0 !== undefined) ? headingDepth0 : headingDepth(_this);
  var headingBase_1371 = (headingBase0 !== undefined) ? headingBase0 : headingBase(_this);
  var sectionMax_1377 = (sectionMax0 !== undefined) ? sectionMax0 : sectionMax(_this);
  var sectionBase_1383 = (sectionBase0 !== undefined) ? sectionBase0 : sectionBase(_this);
  var starBold_1389 = (starBold0 !== undefined) ? starBold0 : starBold(_this);
  var prettyAlign_1395 = (prettyAlign0 !== undefined) ? prettyAlign0 : prettyAlign(_this);
  var logo_1401 = (logo0 !== undefined) ? logo0 : logo(_this);
  var math_1408 = (math0 !== undefined) ? math0 : math(_this);
  var highlight_1414 = (highlight0 !== undefined) ? highlight0 : highlight(_this);
  var hilitelang_1420 = (hilitelang0 !== undefined) ? hilitelang0 : hilitelang(_this);
  var pdflatex_1426 = (pdflatex0 !== undefined) ? pdflatex0 : pdflatex(_this);
  var bibtex_1432 = (bibtex0 !== undefined) ? bibtex0 : bibtex(_this);
  var latex_1445 = (latex0 !== undefined) ? latex0 : latex_1(_this);
  var processTimeout_1451 = (processTimeout0 !== undefined) ? processTimeout0 : processTimeout(_this);
  var zip_1465 = (zip0 !== undefined) ? zip0 : zip(_this);
  var metadata_1471 = (metadata0 !== undefined) ? metadata0 : metadata(_this);
  var embedinfos_1477 = (embedinfos0 !== undefined) ? embedinfos0 : embedinfos(_this);
  var embedLimit_1490 = (embedLimit0 !== undefined) ? embedLimit0 : embedLimit_1(_this);
  var lineNo_1503 = (lineNo0 !== undefined) ? lineNo0 : lineNo(_this);
  var lineNoWeb_1509 = (lineNoWeb0 !== undefined) ? lineNoWeb0 : lineNoWeb(_this);
  var copyStyles_1515 = (copyStyles0 !== undefined) ? copyStyles0 : copyStyles(_this);
  var lineMap_1528 = (lineMap0 !== undefined) ? lineMap0 : lineMap(_this);
  var extractStart_1534 = (extractStart0 !== undefined) ? extractStart0 : extractStart(_this);
  var extractEnd_1540 = (extractEnd0 !== undefined) ? extractEnd0 : extractEnd(_this);
  return Options(version_1106, bench_1112, verbose_1118, verboseMaxLine_1124, pedantic_1130, sanitize_1136, xmp_1142, full_1149, tex_1156, pdf_1162, texzip_1168, rebuild_1174, sandbox_1180, prelude_1186, title_1199, css_1205, scripts_1211, scriptsx_1217, htmlHeader_1223, cssHeader_1229, jsHeader_1235, htmlFooter_1241, jsFooter_1247, htmlMeta_1253, texHeader_1259, texHeaderx_1265, texDocHeader_1271, texDocHeaderx_1277, texFooter_1283, texSectionNum_1289, bibStyle_1295, bib_1301, locale_1314, packages_1320, packagesx_1326, docClass_1339, citestyle_1347, citeAll_1353, tocDepth_1359, headingDepth_1365, headingBase_1371, sectionMax_1377, sectionBase_1383, starBold_1389, prettyAlign_1395, logo_1401, math_1408, highlight_1414, hilitelang_1420, pdflatex_1426, bibtex_1432, latex_1445, processTimeout_1451, zip_1465, metadata_1471, embedinfos_1477, embedLimit_1490, lineNo_1503, lineNoWeb_1509, copyStyles_1515, lineMap_1528, extractStart_1534, extractEnd_1540);
}
 
// Automatically generated. Retrieves the `showVersion` constructor field of the ":commandOptions" type.
function showVersion(commandOptions)  /* (commandOptions : commandOptions) -> bool */  {
  return commandOptions.showVersion;
}
 
// Automatically generated. Retrieves the `convertTex` constructor field of the ":commandOptions" type.
function convertTex(commandOptions)  /* (commandOptions : commandOptions) -> bool */  {
  return commandOptions.convertTex;
}
 
// Automatically generated. Retrieves the `outputDir` constructor field of the ":commandOptions" type.
function outputDir(commandOptions)  /* (commandOptions : commandOptions) -> string */  {
  return commandOptions.outputDir;
}
 
// Automatically generated. Retrieves the `installDir` constructor field of the ":commandOptions" type.
function installDir(commandOptions)  /* (commandOptions : commandOptions) -> string */  {
  return commandOptions.installDir;
}
 
// Automatically generated. Retrieves the `inputs` constructor field of the ":commandOptions" type.
function inputs(commandOptions)  /* (commandOptions : commandOptions) -> list<string> */  {
  return commandOptions.inputs;
}
 
// Automatically generated. Retrieves the `options` constructor field of the ":commandOptions" type.
function options(commandOptions)  /* (commandOptions : commandOptions) -> options */  {
  return commandOptions.options;
}
function _copy_2(_this, showVersion0, convertTex0, outputDir0, installDir0, inputs0, options0)  /* (commandOptions, showVersion : ?bool, convertTex : ?bool, outputDir : ?string, installDir : ?string, inputs : ?list<string>, options : ?options) -> commandOptions */  {
  var showVersion_1660 = (showVersion0 !== undefined) ? showVersion0 : showVersion(_this);
  var convertTex_1666 = (convertTex0 !== undefined) ? convertTex0 : convertTex(_this);
  var outputDir_1672 = (outputDir0 !== undefined) ? outputDir0 : outputDir(_this);
  var installDir_1678 = (installDir0 !== undefined) ? installDir0 : installDir(_this);
  var inputs_1684 = (inputs0 !== undefined) ? inputs0 : inputs(_this);
  var options_1692 = (options0 !== undefined) ? options0 : options(_this);
  return CommandOptions(showVersion_1660, convertTex_1666, outputDir_1672, installDir_1678, inputs_1684, options_1692);
}
function _createMathoptions(mode0, render0, renderFull0, mathjax0, mjext0, imgDir0, scale0, scalePng0, scaleSvg0, dpi0, baseline0, embedLimit0, docClass0, svgShare0, svgPrec0, svgDefs0, svgFontFormat0, svgBBoxExact0, concurrency0, dvipng0, dvisvg0, latex0, latexFull0, dvips0, ps2pdf0, convert0, dim0)  /* (mode : ?mathmode, render : ?maybe<common/mathrender>, renderFull : ?maybe<common/mathrender>, mathjax : ?string, mjext : ?string, imgDir : ?string, scale : ?int, scalePng : ?int, scaleSvg : ?int, dpi : ?int, baseline : ?int, embedLimit : ?int, docClass : ?string, svgShare : ?bool, svgPrec : ?int, svgDefs : ?string, svgFontFormat : ?string, svgBBoxExact : ?bool, concurrency : ?int, dvipng : ?string, dvisvg : ?string, latex : ?string, latexFull : ?string, dvips : ?string, ps2pdf : ?string, convert : ?string, dim : ?std/dict/dict<common/mathinfo>) -> mathoptions */  {
  var mode_1714 = (mode0 !== undefined) ? mode0 : Static;
  var render_1719 = (render0 !== undefined) ? render0 : $std_core.Nothing;
  var renderFull_1724 = (renderFull0 !== undefined) ? renderFull0 : $std_core.Nothing;
  var mathjax_1728 = (mathjax0 !== undefined) ? mathjax0 : "";
  var mjext_1732 = (mjext0 !== undefined) ? mjext0 : "";
  var imgDir_1736 = (imgDir0 !== undefined) ? imgDir0 : "math";
  var scale_1740 = (scale0 !== undefined) ? scale0 : 0;
  var scalePng_1744 = (scalePng0 !== undefined) ? scalePng0 : 108;
  var scaleSvg_1748 = (scaleSvg0 !== undefined) ? scaleSvg0 : 105;
  var dpi_1752 = (dpi0 !== undefined) ? dpi0 : 300;
  var baseline_1756 = (baseline0 !== undefined) ? baseline0 : 0;
  var embedLimit_1770 = (embedLimit0 !== undefined) ? embedLimit0 : $std_core.intMultiply(512,1024);
  var docClass_1774 = (docClass0 !== undefined) ? docClass0 : "[10pt]book";
  var svgShare_1778 = (svgShare0 !== undefined) ? svgShare0 : true;
  var svgPrec_1782 = (svgPrec0 !== undefined) ? svgPrec0 : 3;
  var svgDefs_1786 = (svgDefs0 !== undefined) ? svgDefs0 : "";
  var svgFontFormat_1790 = (svgFontFormat0 !== undefined) ? svgFontFormat0 : "";
  var svgBBoxExact_1794 = (svgBBoxExact0 !== undefined) ? svgBBoxExact0 : false;
  var concurrency_1798 = (concurrency0 !== undefined) ? concurrency0 : 4;
  var dvipng_1802 = (dvipng0 !== undefined) ? dvipng0 : "dvipng";
  var dvisvg_1806 = (dvisvg0 !== undefined) ? dvisvg0 : "dvisvgm";
  var latex_1810 = (latex0 !== undefined) ? latex0 : "";
  var latexFull_1814 = (latexFull0 !== undefined) ? latexFull0 : "";
  var dvips_1818 = (dvips0 !== undefined) ? dvips0 : "dvips";
  var ps2pdf_1822 = (ps2pdf0 !== undefined) ? ps2pdf0 : "ps2pdf";
  var convert_1826 = (convert0 !== undefined) ? convert0 : "convert";
  var dim_1848 = (dim0 !== undefined) ? dim0 : $std_dict.dict();
  return Mathoptions(mode_1714, render_1719, renderFull_1724, mathjax_1728, mjext_1732, imgDir_1736, scale_1740, scalePng_1744, scaleSvg_1748, dpi_1752, baseline_1756, embedLimit_1770, docClass_1774, svgShare_1778, svgPrec_1782, svgDefs_1786, svgFontFormat_1790, svgBBoxExact_1794, concurrency_1798, dvipng_1802, dvisvg_1806, latex_1810, latexFull_1814, dvips_1818, ps2pdf_1822, convert_1826, dim_1848);
}
 
// The options
function _createOptions(version0, bench0, verbose0, verboseMaxLine0, pedantic0, sanitize0, xmp0, full0, tex0, pdf0, texzip0, rebuild0, sandbox0, prelude0, title0, css0, scripts0, scriptsx0, htmlHeader0, cssHeader0, jsHeader0, htmlFooter0, jsFooter0, htmlMeta0, texHeader0, texHeaderx0, texDocHeader0, texDocHeaderx0, texFooter0, texSectionNum0, bibStyle0, bib0, locale0, packages0, packagesx0, docClass0, citestyle0, citeAll0, tocDepth0, headingDepth0, headingBase0, sectionMax0, sectionBase0, starBold0, prettyAlign0, logo0, math0, highlight0, hilitelang0, pdflatex0, bibtex0, latex0, processTimeout0, zip0, metadata0, embedinfos0, embedLimit0, lineNo0, lineNoWeb0, copyStyles0, lineMap0, extractStart0, extractEnd0)  /* (version : ?string, bench : ?bool, verbose : ?int, verboseMaxLine : ?int, pedantic : ?bool, sanitize : ?bool, xmp : ?bool, full : ?maybe<bool>, tex : ?bool, pdf : ?bool, texzip : ?bool, rebuild : ?bool, sandbox : ?bool, prelude : ?string, title : ?string, css : ?string, scripts : ?string, scriptsx : ?string, htmlHeader : ?string, cssHeader : ?string, jsHeader : ?string, htmlFooter : ?string, jsFooter : ?string, htmlMeta : ?string, texHeader : ?string, texHeaderx : ?string, texDocHeader : ?string, texDocHeaderx : ?string, texFooter : ?string, texSectionNum : ?bool, bibStyle : ?bibstyle, bib : ?string, locale : ?string, packages : ?string, packagesx : ?string, docClass : ?string, citestyle : ?maybe<common/citestyle>, citeAll : ?bool, tocDepth : ?int, headingDepth : ?int, headingBase : ?int, sectionMax : ?int, sectionBase : ?int, starBold : ?bool, prettyAlign : ?int, logo : ?bool, math : ?mathoptions, highlight : ?bool, hilitelang : ?string, pdflatex : ?string, bibtex : ?string, latex : ?string, processTimeout : ?int, zip : ?string, metadata : ?metadata, embedinfos : ?std/dict/dict<common/embedinfo>, embedLimit : ?int, lineNo : ?int, lineNoWeb : ?bool, copyStyles : ?bool, lineMap : ?common/lineMap, extractStart : ?string, extractEnd : ?string) -> options */  {
  var version_1883 = (version0 !== undefined) ? version0 : "";
  var bench_1887 = (bench0 !== undefined) ? bench0 : false;
  var verbose_1891 = (verbose0 !== undefined) ? verbose0 : 0;
  var verboseMaxLine_1895 = (verboseMaxLine0 !== undefined) ? verboseMaxLine0 : 78;
  var pedantic_1899 = (pedantic0 !== undefined) ? pedantic0 : false;
  var sanitize_1903 = (sanitize0 !== undefined) ? sanitize0 : false;
  var xmp_1907 = (xmp0 !== undefined) ? xmp0 : false;
  var full_1912 = (full0 !== undefined) ? full0 : $std_core.Nothing;
  var tex_1916 = (tex0 !== undefined) ? tex0 : false;
  var pdf_1920 = (pdf0 !== undefined) ? pdf0 : false;
  var texzip_1924 = (texzip0 !== undefined) ? texzip0 : false;
  var rebuild_1928 = (rebuild0 !== undefined) ? rebuild0 : false;
  var sandbox_1932 = (sandbox0 !== undefined) ? sandbox0 : false;
  var prelude_1936 = (prelude0 !== undefined) ? prelude0 : "prelude";
  var title_1940 = (title0 !== undefined) ? title0 : "";
  var css_1944 = (css0 !== undefined) ? css0 : "madoko.css";
  var scripts_1948 = (scripts0 !== undefined) ? scripts0 : "";
  var scriptsx_1952 = (scriptsx0 !== undefined) ? scriptsx0 : "";
  var htmlHeader_1956 = (htmlHeader0 !== undefined) ? htmlHeader0 : "";
  var cssHeader_1960 = (cssHeader0 !== undefined) ? cssHeader0 : "";
  var jsHeader_1964 = (jsHeader0 !== undefined) ? jsHeader0 : "";
  var htmlFooter_1968 = (htmlFooter0 !== undefined) ? htmlFooter0 : "";
  var jsFooter_1972 = (jsFooter0 !== undefined) ? jsFooter0 : "";
  var htmlMeta_1976 = (htmlMeta0 !== undefined) ? htmlMeta0 : "name=\"viewport\" content=\"initial-scale=1.0\"";
  var texHeader_1980 = (texHeader0 !== undefined) ? texHeader0 : "";
  var texHeaderx_1984 = (texHeaderx0 !== undefined) ? texHeaderx0 : "";
  var texDocHeader_1988 = (texDocHeader0 !== undefined) ? texDocHeader0 : "";
  var texDocHeaderx_1992 = (texDocHeaderx0 !== undefined) ? texDocHeaderx0 : "";
  var texFooter_1996 = (texFooter0 !== undefined) ? texFooter0 : "";
  var texSectionNum_2000 = (texSectionNum0 !== undefined) ? texSectionNum0 : false;
  var bibStyle_2007 = (bibStyle0 !== undefined) ? bibStyle0 : Csl("madoko-numeric", "");
  var bib_2011 = (bib0 !== undefined) ? bib0 : "";
  var locale_2015 = (locale0 !== undefined) ? locale0 : "en-US";
  var packages_2019 = (packages0 !== undefined) ? packages0 : "";
  var packagesx_2023 = (packagesx0 !== undefined) ? packagesx0 : "";
  var docClass_2027 = (docClass0 !== undefined) ? docClass0 : "";
  var citestyle_2032 = (citestyle0 !== undefined) ? citestyle0 : $std_core.Nothing;
  var citeAll_2036 = (citeAll0 !== undefined) ? citeAll0 : false;
  var tocDepth_2040 = (tocDepth0 !== undefined) ? tocDepth0 : 3;
  var headingDepth_2044 = (headingDepth0 !== undefined) ? headingDepth0 : 3;
  var headingBase_2048 = (headingBase0 !== undefined) ? headingBase0 : 2;
  var sectionMax_2052 = (sectionMax0 !== undefined) ? sectionMax0 : 0;
  var sectionBase_2056 = (sectionBase0 !== undefined) ? sectionBase0 : 1;
  var starBold_2060 = (starBold0 !== undefined) ? starBold0 : false;
  var prettyAlign_2064 = (prettyAlign0 !== undefined) ? prettyAlign0 : 2;
  var logo_2068 = (logo0 !== undefined) ? logo0 : true;
  var math_2127 = (math0 !== undefined) ? math0 : _createMathoptions(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var highlight_2131 = (highlight0 !== undefined) ? highlight0 : true;
  var hilitelang_2135 = (hilitelang0 !== undefined) ? hilitelang0 : "";
  var pdflatex_2139 = (pdflatex0 !== undefined) ? pdflatex0 : "";
  var bibtex_2143 = (bibtex0 !== undefined) ? bibtex0 : "bibtex";
  var latex_2147 = (latex0 !== undefined) ? latex0 : "latex";
  var processTimeout_2151 = (processTimeout0 !== undefined) ? processTimeout0 : 0;
  var zip_2155 = (zip0 !== undefined) ? zip0 : "zip";
  var metadata_2160 = (metadata0 !== undefined) ? metadata0 : $std_core.Nil;
  var embedinfos_2182 = (embedinfos0 !== undefined) ? embedinfos0 : $std_dict.dict();
  var embedLimit_2196 = (embedLimit0 !== undefined) ? embedLimit0 : $std_core.intMultiply(512,1024);
  var lineNo_2200 = (lineNo0 !== undefined) ? lineNo0 : 1;
  var lineNoWeb_2204 = (lineNoWeb0 !== undefined) ? lineNoWeb0 : false;
  var copyStyles_2208 = (copyStyles0 !== undefined) ? copyStyles0 : true;
  var lineMap_2212 = (lineMap0 !== undefined) ? lineMap0 : $common.End;
  var extractStart_2216 = (extractStart0 !== undefined) ? extractStart0 : "^(?:\\/\\/|--|[#%]|[<]!--|\\(\\*) *BEGIN *: *(\\w+) *(?:--[>]|\\*\\))?$";
  var extractEnd_2220 = (extractEnd0 !== undefined) ? extractEnd0 : "^(?:\\/\\/|--|[#%]|[<]!--|\\(\\*) *END *(?:[:] *(\\w+) *)?(?:--[>]|\\*\\))?$";
  return Options(version_1883, bench_1887, verbose_1891, verboseMaxLine_1895, pedantic_1899, sanitize_1903, xmp_1907, full_1912, tex_1916, pdf_1920, texzip_1924, rebuild_1928, sandbox_1932, prelude_1936, title_1940, css_1944, scripts_1948, scriptsx_1952, htmlHeader_1956, cssHeader_1960, jsHeader_1964, htmlFooter_1968, jsFooter_1972, htmlMeta_1976, texHeader_1980, texHeaderx_1984, texDocHeader_1988, texDocHeaderx_1992, texFooter_1996, texSectionNum_2000, bibStyle_2007, bib_2011, locale_2015, packages_2019, packagesx_2023, docClass_2027, citestyle_2032, citeAll_2036, tocDepth_2040, headingDepth_2044, headingBase_2048, sectionMax_2052, sectionBase_2056, starBold_2060, prettyAlign_2064, logo_2068, math_2127, highlight_2131, hilitelang_2135, pdflatex_2139, bibtex_2143, latex_2147, processTimeout_2151, zip_2155, metadata_2160, embedinfos_2182, embedLimit_2196, lineNo_2200, lineNoWeb_2204, copyStyles_2208, lineMap_2212, extractStart_2216, extractEnd_2220);
}
function _createCommandOptions(showVersion0, convertTex0, outputDir0, installDir0, inputs0, options0)  /* (showVersion : ?bool, convertTex : ?bool, outputDir : ?string, installDir : ?string, inputs : ?list<string>, options : ?options) -> commandOptions */  {
  var showVersion_2293 = (showVersion0 !== undefined) ? showVersion0 : false;
  var convertTex_2297 = (convertTex0 !== undefined) ? convertTex0 : false;
  var outputDir_2301 = (outputDir0 !== undefined) ? outputDir0 : "out";
  var installDir_2305 = (installDir0 !== undefined) ? installDir0 : "";
  var inputs_2310 = (inputs0 !== undefined) ? inputs0 : $std_core.Nil;
  var options_2443 = (options0 !== undefined) ? options0 : _createOptions(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  return CommandOptions(showVersion_2293, convertTex_2297, outputDir_2301, installDir_2305, inputs_2310, options_2443);
}
function cflag(f)  /* (f : (commandOptions, bool) -> commandOptions) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Flag(f);
}
 
// sanitize options
function check(cmdOptions)  /* (cmdOptions : commandOptions) -> io commandOptions */  {
  var arg_2563 = cmdOptions;
  var _x1 = (installDir(cmdOptions) === "");
  if (_x1) {
    var _x0 = $std_path.dirname($std_path.programPath());
  }
  else {
    var _x0 = installDir(cmdOptions);
  }
  var arg_2567 = _x0;
  var arg_2564 = undefined;
  var arg_2565 = undefined;
  var arg_2566 = undefined;
  var arg_2568 = undefined;
  var arg_2569 = undefined;
  return _copy_2(arg_2563, arg_2564, arg_2565, arg_2566, arg_2567, arg_2568, arg_2569);
}
function creq(f, help)  /* (f : (commandOptions, string) -> commandOptions, help : string) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Req(f, help);
}
function cutoff(s, n)  /* (s : string, n : int) -> string */  {
  if (n <= 1) {
    return s;
  }
  else {
    $std_core._unit_;
  }
  return $std_core.unlines($std_core.map_5($std_core.lines(s), function(line  /* string */ ) {  var _x0 = (line).length >= n; if (_x0) {  return ($std_core.substr_1(line, 0, ((n - 1)|0)) + ("\n" + ((line).substr(((n - 1)|0)))));} else {  return line;}}));
}
function oflag(f)  /* (f : (options, bool) -> options) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Flag(function(co  /* commandOptions */ , b  /* bool */ ) {
    return _copy_2(co, undefined, undefined, undefined, undefined, undefined, f(options(co), b));
  });
}
function oreq(f, help)  /* (f : (options, string) -> options, help : string) -> std/flags/optionArg<commandOptions> */  {
  return $std_flags.Req(function(co  /* commandOptions */ , v  /* string */ ) {  return _copy_2(co, undefined, undefined, undefined, undefined, undefined, f(options(co), v));}, help);
}
function setbench(o, b)  /* (o : options, b : bool) -> options */  {
  if (b) {
    return _copy_1(o, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    return _copy_1(o, undefined, false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
}
function setMeta(opts0, value)  /* (opts0 : options, value : string) -> options */  {
  var keyvals = $std_core.list_4($std_core.split_1(value, ";"));
  return $std_core.foldl(keyvals, opts0, function(opts  /* options */ , keyval  /* string */ ) {  var i = ((keyval).indexOf(":")); if (i > 0) {  var key = $std_string.trim($std_core.substr_1(keyval, 0, i)); var s = $std_string.trim(((keyval).substr(((i + 1)|0)))); return _copy_1(opts, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core._plus__3(metadata(opts), $std_core.Cons($std_core._tuple2_(key, s), $std_core.Nil)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);} else {  $common.warning(("illegal --meta option: " + value), undefined); return opts;}});
}
var optionsDesc = $std_core.conslist([$std_flags._createOption("", $std_core.Cons("version", $std_core.Nil), cflag(function(co  /* commandOptions */ , v  /* bool */ ) {  return _copy_2(co, v, undefined, undefined, undefined, undefined, undefined);}), "Display version information", undefined), $std_flags._createOption("v", $std_core.Cons("verbose", $std_core.Nil), oflag(function(o  /* options */ , v0  /* bool */ ) {  var arg_7215 = o;if (v0) {  var _x0 = ((verbose(o) + 1)|0);} else {  var _x0 = 0;} var arg_7218 = _x0;var arg_7216 = undefined;var arg_7217 = undefined;var arg_7219 = undefined;var arg_7220 = undefined;var arg_7221 = undefined;var arg_7222 = undefined;var arg_7223 = undefined;var arg_7224 = undefined;var arg_7225 = undefined;var arg_7226 = undefined;var arg_7227 = undefined;var arg_7228 = undefined;var arg_7229 = undefined;var arg_7230 = undefined;var arg_7231 = undefined;var arg_7232 = undefined;var arg_7233 = undefined;var arg_7234 = undefined;var arg_7235 = undefined;var arg_7236 = undefined;var arg_7237 = undefined;var arg_7238 = undefined;var arg_7239 = undefined;var arg_7240 = undefined;var arg_7241 = undefined;var arg_7242 = undefined;var arg_7243 = undefined;var arg_7244 = undefined;var arg_7245 = undefined;var arg_7246 = undefined;var arg_7247 = undefined;var arg_7248 = undefined;var arg_7249 = undefined;var arg_7250 = undefined;var arg_7251 = undefined;var arg_7252 = undefined;var arg_7253 = undefined;var arg_7254 = undefined;var arg_7255 = undefined;var arg_7256 = undefined;var arg_7257 = undefined;var arg_7258 = undefined;var arg_7259 = undefined;var arg_7260 = undefined;var arg_7261 = undefined;var arg_7262 = undefined;var arg_7263 = undefined;var arg_7264 = undefined;var arg_7265 = undefined;var arg_7266 = undefined;var arg_7267 = undefined;var arg_7268 = undefined;var arg_7269 = undefined;var arg_7270 = undefined;var arg_7271 = undefined;var arg_7272 = undefined;var arg_7273 = undefined;var arg_7274 = undefined;var arg_7275 = undefined;var arg_7276 = undefined;var arg_7277 = undefined;var arg_7278 = undefined; return _copy_1(arg_7215, arg_7216, arg_7217, arg_7218, arg_7219, arg_7220, arg_7221, arg_7222, arg_7223, arg_7224, arg_7225, arg_7226, arg_7227, arg_7228, arg_7229, arg_7230, arg_7231, arg_7232, arg_7233, arg_7234, arg_7235, arg_7236, arg_7237, arg_7238, arg_7239, arg_7240, arg_7241, arg_7242, arg_7243, arg_7244, arg_7245, arg_7246, arg_7247, arg_7248, arg_7249, arg_7250, arg_7251, arg_7252, arg_7253, arg_7254, arg_7255, arg_7256, arg_7257, arg_7258, arg_7259, arg_7260, arg_7261, arg_7262, arg_7263, arg_7264, arg_7265, arg_7266, arg_7267, arg_7268, arg_7269, arg_7270, arg_7271, arg_7272, arg_7273, arg_7274, arg_7275, arg_7276, arg_7277, arg_7278);}), "Be more verbose", undefined), $std_flags._createOption("", $std_core.Cons("odir", $std_core.Nil), creq(function(co0  /* commandOptions */ , s  /* string */ ) {  return _copy_2(co0, undefined, undefined, s, undefined, undefined, undefined);}, "DIR"), "Write output files to the specified directory", undefined), $std_flags._createOption("", $std_core.Cons("xmp", $std_core.Nil), oflag(function(o0  /* options */ , v1  /* bool */ ) {  return _copy_1(o0, undefined, undefined, undefined, undefined, undefined, undefined, v1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Only process markdown between <xmp> tags", undefined), $std_flags._createOption("", $std_core.Cons("tex", $std_core.Nil), oflag(function(o1  /* options */ , v2  /* bool */ ) {  return _copy_1(o1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a LaTeX file too", undefined), $std_flags._createOption("", $std_core.Cons("pdf", $std_core.Nil), oflag(function(o2  /* options */ , v3  /* bool */ ) {  var arg_6483 = o2;var arg_6493 = v3;var _x0 = (v3) ? true : tex(o2); var arg_6492 = _x0;var arg_6484 = undefined;var arg_6485 = undefined;var arg_6486 = undefined;var arg_6487 = undefined;var arg_6488 = undefined;var arg_6489 = undefined;var arg_6490 = undefined;var arg_6491 = undefined;var arg_6494 = undefined;var arg_6495 = undefined;var arg_6496 = undefined;var arg_6497 = undefined;var arg_6498 = undefined;var arg_6499 = undefined;var arg_6500 = undefined;var arg_6501 = undefined;var arg_6502 = undefined;var arg_6503 = undefined;var arg_6504 = undefined;var arg_6505 = undefined;var arg_6506 = undefined;var arg_6507 = undefined;var arg_6508 = undefined;var arg_6509 = undefined;var arg_6510 = undefined;var arg_6511 = undefined;var arg_6512 = undefined;var arg_6513 = undefined;var arg_6514 = undefined;var arg_6515 = undefined;var arg_6516 = undefined;var arg_6517 = undefined;var arg_6518 = undefined;var arg_6519 = undefined;var arg_6520 = undefined;var arg_6521 = undefined;var arg_6522 = undefined;var arg_6523 = undefined;var arg_6524 = undefined;var arg_6525 = undefined;var arg_6526 = undefined;var arg_6527 = undefined;var arg_6528 = undefined;var arg_6529 = undefined;var arg_6530 = undefined;var arg_6531 = undefined;var arg_6532 = undefined;var arg_6533 = undefined;var arg_6534 = undefined;var arg_6535 = undefined;var arg_6536 = undefined;var arg_6537 = undefined;var arg_6538 = undefined;var arg_6539 = undefined;var arg_6540 = undefined;var arg_6541 = undefined;var arg_6542 = undefined;var arg_6543 = undefined;var arg_6544 = undefined;var arg_6545 = undefined;var arg_6546 = undefined; return _copy_1(arg_6483, arg_6484, arg_6485, arg_6486, arg_6487, arg_6488, arg_6489, arg_6490, arg_6491, arg_6492, arg_6493, arg_6494, arg_6495, arg_6496, arg_6497, arg_6498, arg_6499, arg_6500, arg_6501, arg_6502, arg_6503, arg_6504, arg_6505, arg_6506, arg_6507, arg_6508, arg_6509, arg_6510, arg_6511, arg_6512, arg_6513, arg_6514, arg_6515, arg_6516, arg_6517, arg_6518, arg_6519, arg_6520, arg_6521, arg_6522, arg_6523, arg_6524, arg_6525, arg_6526, arg_6527, arg_6528, arg_6529, arg_6530, arg_6531, arg_6532, arg_6533, arg_6534, arg_6535, arg_6536, arg_6537, arg_6538, arg_6539, arg_6540, arg_6541, arg_6542, arg_6543, arg_6544, arg_6545, arg_6546);}), "Generate PDF using LaTeX", undefined), $std_flags._createOption("", $std_core.Cons("texzip", $std_core.Nil), oflag(function(o3  /* options */ , v4  /* bool */ ) {  var arg_6223 = o3;var arg_6234 = v4;var _x0 = (v4) ? true : tex(o3); var arg_6232 = _x0;var _x0 = (v4) ? true : pdf(o3); var arg_6233 = _x0;var arg_6281 = 0;var arg_6224 = undefined;var arg_6225 = undefined;var arg_6226 = undefined;var arg_6227 = undefined;var arg_6228 = undefined;var arg_6229 = undefined;var arg_6230 = undefined;var arg_6231 = undefined;var arg_6235 = undefined;var arg_6236 = undefined;var arg_6237 = undefined;var arg_6238 = undefined;var arg_6239 = undefined;var arg_6240 = undefined;var arg_6241 = undefined;var arg_6242 = undefined;var arg_6243 = undefined;var arg_6244 = undefined;var arg_6245 = undefined;var arg_6246 = undefined;var arg_6247 = undefined;var arg_6248 = undefined;var arg_6249 = undefined;var arg_6250 = undefined;var arg_6251 = undefined;var arg_6252 = undefined;var arg_6253 = undefined;var arg_6254 = undefined;var arg_6255 = undefined;var arg_6256 = undefined;var arg_6257 = undefined;var arg_6258 = undefined;var arg_6259 = undefined;var arg_6260 = undefined;var arg_6261 = undefined;var arg_6262 = undefined;var arg_6263 = undefined;var arg_6264 = undefined;var arg_6265 = undefined;var arg_6266 = undefined;var arg_6267 = undefined;var arg_6268 = undefined;var arg_6269 = undefined;var arg_6270 = undefined;var arg_6271 = undefined;var arg_6272 = undefined;var arg_6273 = undefined;var arg_6274 = undefined;var arg_6275 = undefined;var arg_6276 = undefined;var arg_6277 = undefined;var arg_6278 = undefined;var arg_6279 = undefined;var arg_6280 = undefined;var arg_6282 = undefined;var arg_6283 = undefined;var arg_6284 = undefined;var arg_6285 = undefined;var arg_6286 = undefined; return _copy_1(arg_6223, arg_6224, arg_6225, arg_6226, arg_6227, arg_6228, arg_6229, arg_6230, arg_6231, arg_6232, arg_6233, arg_6234, arg_6235, arg_6236, arg_6237, arg_6238, arg_6239, arg_6240, arg_6241, arg_6242, arg_6243, arg_6244, arg_6245, arg_6246, arg_6247, arg_6248, arg_6249, arg_6250, arg_6251, arg_6252, arg_6253, arg_6254, arg_6255, arg_6256, arg_6257, arg_6258, arg_6259, arg_6260, arg_6261, arg_6262, arg_6263, arg_6264, arg_6265, arg_6266, arg_6267, arg_6268, arg_6269, arg_6270, arg_6271, arg_6272, arg_6273, arg_6274, arg_6275, arg_6276, arg_6277, arg_6278, arg_6279, arg_6280, arg_6281, arg_6282, arg_6283, arg_6284, arg_6285, arg_6286);}), "Generate TeX zip for submission", undefined), $std_flags._createOption("", $std_core.Cons("png", $std_core.Nil), oflag(function(o4  /* options */ , v5  /* bool */ ) {  var arg_5952 = o4;var arg_5892 = math(o4);var _x0 = (v5) ? $common.Png : $common.Svg; var arg_5894 = $std_core.Just(_x0);var arg_5893 = undefined;var arg_5895 = undefined;var arg_5896 = undefined;var arg_5897 = undefined;var arg_5898 = undefined;var arg_5899 = undefined;var arg_5900 = undefined;var arg_5901 = undefined;var arg_5902 = undefined;var arg_5903 = undefined;var arg_5904 = undefined;var arg_5905 = undefined;var arg_5906 = undefined;var arg_5907 = undefined;var arg_5908 = undefined;var arg_5909 = undefined;var arg_5910 = undefined;var arg_5911 = undefined;var arg_5912 = undefined;var arg_5913 = undefined;var arg_5914 = undefined;var arg_5915 = undefined;var arg_5916 = undefined;var arg_5917 = undefined;var arg_5918 = undefined;var arg_5919 = undefined; var arg_5999 = _copy(arg_5892, arg_5893, arg_5894, arg_5895, arg_5896, arg_5897, arg_5898, arg_5899, arg_5900, arg_5901, arg_5902, arg_5903, arg_5904, arg_5905, arg_5906, arg_5907, arg_5908, arg_5909, arg_5910, arg_5911, arg_5912, arg_5913, arg_5914, arg_5915, arg_5916, arg_5917, arg_5918, arg_5919);var arg_5953 = undefined;var arg_5954 = undefined;var arg_5955 = undefined;var arg_5956 = undefined;var arg_5957 = undefined;var arg_5958 = undefined;var arg_5959 = undefined;var arg_5960 = undefined;var arg_5961 = undefined;var arg_5962 = undefined;var arg_5963 = undefined;var arg_5964 = undefined;var arg_5965 = undefined;var arg_5966 = undefined;var arg_5967 = undefined;var arg_5968 = undefined;var arg_5969 = undefined;var arg_5970 = undefined;var arg_5971 = undefined;var arg_5972 = undefined;var arg_5973 = undefined;var arg_5974 = undefined;var arg_5975 = undefined;var arg_5976 = undefined;var arg_5977 = undefined;var arg_5978 = undefined;var arg_5979 = undefined;var arg_5980 = undefined;var arg_5981 = undefined;var arg_5982 = undefined;var arg_5983 = undefined;var arg_5984 = undefined;var arg_5985 = undefined;var arg_5986 = undefined;var arg_5987 = undefined;var arg_5988 = undefined;var arg_5989 = undefined;var arg_5990 = undefined;var arg_5991 = undefined;var arg_5992 = undefined;var arg_5993 = undefined;var arg_5994 = undefined;var arg_5995 = undefined;var arg_5996 = undefined;var arg_5997 = undefined;var arg_5998 = undefined;var arg_6000 = undefined;var arg_6001 = undefined;var arg_6002 = undefined;var arg_6003 = undefined;var arg_6004 = undefined;var arg_6005 = undefined;var arg_6006 = undefined;var arg_6007 = undefined;var arg_6008 = undefined;var arg_6009 = undefined;var arg_6010 = undefined;var arg_6011 = undefined;var arg_6012 = undefined;var arg_6013 = undefined;var arg_6014 = undefined;var arg_6015 = undefined; return _copy_1(arg_5952, arg_5953, arg_5954, arg_5955, arg_5956, arg_5957, arg_5958, arg_5959, arg_5960, arg_5961, arg_5962, arg_5963, arg_5964, arg_5965, arg_5966, arg_5967, arg_5968, arg_5969, arg_5970, arg_5971, arg_5972, arg_5973, arg_5974, arg_5975, arg_5976, arg_5977, arg_5978, arg_5979, arg_5980, arg_5981, arg_5982, arg_5983, arg_5984, arg_5985, arg_5986, arg_5987, arg_5988, arg_5989, arg_5990, arg_5991, arg_5992, arg_5993, arg_5994, arg_5995, arg_5996, arg_5997, arg_5998, arg_5999, arg_6000, arg_6001, arg_6002, arg_6003, arg_6004, arg_6005, arg_6006, arg_6007, arg_6008, arg_6009, arg_6010, arg_6011, arg_6012, arg_6013, arg_6014, arg_6015);}), "Use PNG instead of SVG for math in HTML", undefined), $std_flags._createOption("", $std_core.Cons("convert-tex", $std_core.Nil), cflag(function(co1  /* commandOptions */ , v6  /* bool */ ) {  return _copy_2(co1, undefined, v6, undefined, undefined, undefined, undefined);}), "Convert input from TeX to Markdown", undefined), $std_flags._createOption("f", $std_core.Cons("fragment", $std_core.Nil), oflag(function(o5  /* options */ , v7  /* bool */ ) {  return _copy_1(o5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.Just(!(v7)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a fragment instead of a full document", undefined), $std_flags._createOption("", $std_core.Cons("logo", $std_core.Nil), oflag(function(o6  /* options */ , v8  /* bool */ ) {  return _copy_1(o6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Generate a logo at the end of the document", undefined), $std_flags._createOption("", $std_core.Cons("sanitize", $std_core.Nil), oflag(function(o7  /* options */ , v9  /* bool */ ) {  return _copy_1(o7, undefined, undefined, undefined, undefined, undefined, v9, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Always escape or suppress user defined html", undefined), $std_flags._createOption("", $std_core.Cons("sandbox", $std_core.Nil), oflag(function(o8  /* options */ , v10  /* bool */ ) {  return _copy_1(o8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Run in a sandbox for secure server execution", undefined), $std_flags._createOption("", $std_core.Cons("pedantic", $std_core.Nil), oflag(function(o9  /* options */ , v11  /* bool */ ) {  return _copy_1(o9, undefined, undefined, undefined, undefined, v11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Pedantic mode", undefined), $std_flags._createOption("", $std_core.Cons("bench", $std_core.Nil), oflag(setbench), "For benchmarking: turn off numbering, etc.", undefined), $std_flags._createOption("", $std_core.Cons("installdir", $std_core.Nil), creq(function(co2  /* commandOptions */ , s0  /* string */ ) {  return _copy_2(co2, undefined, undefined, undefined, s0, undefined, undefined);}, "DIR"), "Set installation directory explicitly", undefined), $std_flags._createOption("r", $std_core.Cons("rebuild", $std_core.Nil), oflag(function(o10  /* options */ , v12  /* bool */ ) {  return _copy_1(o10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, v12, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}), "Force rebuild bibliography, math, etc.", undefined), $std_flags._createOption("", $std_core.Cons("prelude", $std_core.Nil), oreq(function(o11  /* options */ , s1  /* string */ ) {  return _copy_1(o11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, s1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}, "FILE"), "Include <FILE> at start of the document", undefined), $std_flags._createOption("", $std_core.Cons("verbose-max", $std_core.Nil), oreq(function(o12  /* options */ , s2  /* string */ ) {  return _copy_1(o12, undefined, undefined, undefined, $std_core.parseIntDefault(s2, 78, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);}, "LEN"), "Maximum line length for messages", undefined), $std_flags._createOption("m", $std_core.Cons("meta", $std_core.Nil), oreq(setMeta, "key:val"), "Semi-colon separated list of metadata values", undefined)], $std_core.Nil);
function fullUsageInfo()  /* () -> string */  {
  var header = "usage:\n madoko [options] files\n\noptions:";
  return ($std_flags.usageInfo(optionsDesc, header) + "\n\nPrefix a flag with \'no-\' to negate it. For example \'--no-logo\'.");
}
function getDocName(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.find(metadata(opts), function(kv  /* (string, string) */ ) {  return ($std_core.fst(kv) === "docname");});
  if (_x0 != null) {
    return ($std_core.snd(_x0.unJust) + ": ");
  }
  else {
    return "";
  }
}
function getMathjax(opts)  /* (opts : mathoptions) -> string */  {
  var _x0 = (mathjax(opts) !== "default");
  return (_x0) ? mathjax(opts) : "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
}
function getMathLatex(opts)  /* (opts : options) -> string */  {
  var _x0 = (latex(math(opts)) !== "");
  if (_x0) {
    return latex(math(opts));
  }
  else {
    return latex_1(opts);
  }
}
function getMathLatexFull(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.bool_2(latexFull(math(opts)));
  if (_x0) {
    return latexFull(math(opts));
  }
  else {
    return getMathLatex(opts);
  }
}
function getMathRender_1(opts)  /* (opts : mathoptions) -> common/mathrender */  {
  var _x0 = render(opts);
  return (_x0 == null) ? $common.Svg : _x0.unJust;
}
function getMathRenderFull(opts)  /* (opts : mathoptions) -> common/mathrender */  {
  var _x0 = renderFull(opts);
  return (_x0 == null) ? getMathRender_1(opts) : _x0.unJust;
}
function getMathRender(opts, kind)  /* (opts : mathoptions, kind : common/mathkind) -> common/mathrender */  {
  return (kind === 1) ? getMathRender_1(opts) : getMathRenderFull(opts);
}
function getMathScale(opts, mrender)  /* (opts : mathoptions, mrender : common/mathrender) -> int */  {
  var _x0 = scale(opts) === 0;
  if (_x0) {
    return (mrender === 1) ? scalePng(opts) : scaleSvg(opts);
  }
  else {
    return scale(opts);
  }
}
function getPdfLatex(opts)  /* (opts : options) -> string */  {
  var _x0 = $std_core.bool_2(pdflatex(opts));
  if (_x0) {
    return pdflatex(opts);
  }
  else {
    return $std_path.combine($std_path.dirname(latex_1(opts)), "xelatex");
  }
}
function indent(opts, s, maxLine)  /* (opts : options, s : string, maxLine : ?int) -> string */  {
  var maxLine_8072 = (maxLine !== undefined) ? maxLine : 78;
  return $std_core.unlines($std_core.map_5($std_core.lines(cutoff(s, maxLine_8072)), function(line  /* string */ ) {  return ("  " + line);}));
}
function parseOptionList(version0, cmdargs)  /* (version : string, cmdargs : list<string>) -> io maybe<commandOptions> */  {
  var _x0 = $std_flags.parse(_createCommandOptions(undefined, undefined, undefined, undefined, undefined, _createOptions(version0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)), optionsDesc, cmdargs, undefined);
  var _x1 = !($std_core.isNil(_x0.thd));
  if (_x1) {
    $std_core.println(($std_core.join_4(_x0.thd, "\n") + ("\n" + fullUsageInfo())));
    return $std_core.Nothing;
  }
  else {
    if (showVersion(_x0.fst)) {
      $std_core.println(("Madoko, version " + (version0 + ".")));
      return $std_core.Nothing;
    }
    else {
      if ($std_core.isNil(_x0.snd)) {
        $std_core.println(fullUsageInfo());
        return $std_core.Nothing;
      }
      else {
        return $std_core.Just(check(_copy_2(_x0.fst, undefined, undefined, undefined, undefined, _x0.snd, undefined)));
      }
    }
  }
}
 
// Parse the options from the command line given some extra arguments (default `""`).
function parseOptions(version0, extra)  /* (version : string, extra : ?string) -> io maybe<commandOptions> */  {
  var extra_8949 = (extra !== undefined) ? extra : "";
  return parseOptionList(version0, $std_core._plus__3($std_env.$arguments, $std_core.filter($std_core.list_4($std_core.split_1(extra_8949, " ")), function(s  /* string */ ) {  return (s !== "");})));
}
function print(opts, msg, level)  /* (opts : options, msg : string, level : ?int) -> console () */  {
  var level_9129 = (level !== undefined) ? level : 1;
  var _x0 = verbose(opts) >= level_9129;
  if (_x0) {
    return $std_core.println(indent(opts, (getDocName(opts) + msg), verboseMaxLine(opts)));
  }
  else {
    return $std_core._unit_;
  }
}
function printErr(opts, msg, level)  /* (opts : options, msg : string, level : ?int) -> console () */  {
  var level_9287 = (level !== undefined) ? level : 0;
  var _x0 = verbose(opts) >= level_9287;
  if (_x0) {
    return $std_core.println(indent(opts, msg, verboseMaxLine(opts)));
  }
  else {
    return $std_core._unit_;
  }
}
 
// koka exports:
return { 'Bst': Bst, 'Csl': Csl, 'Static': Static, 'Dynamic': Dynamic, 'Mathoptions': Mathoptions, 'Options': Options, 'CommandOptions': CommandOptions, 'styleName': styleName, 'locale': locale, 'isBst': isBst, 'isCsl': isCsl, 'isStatic': isStatic, 'isDynamic': isDynamic, 'mode': mode, 'render': render, 'renderFull': renderFull, 'mathjax': mathjax, 'mjext': mjext, 'imgDir': imgDir, 'scale': scale, 'scalePng': scalePng, 'scaleSvg': scaleSvg, 'dpi': dpi, 'baseline': baseline, 'embedLimit': embedLimit, 'docClass': docClass, 'svgShare': svgShare, 'svgPrec': svgPrec, 'svgDefs': svgDefs, 'svgFontFormat': svgFontFormat, 'svgBBoxExact': svgBBoxExact, 'concurrency': concurrency, 'dvipng': dvipng, 'dvisvg': dvisvg, 'latex': latex, 'latexFull': latexFull, 'dvips': dvips, 'ps2pdf': ps2pdf, 'convert': convert, 'dim': dim, '_copy': _copy, 'version': version, 'bench': bench, 'verbose': verbose, 'verboseMaxLine': verboseMaxLine, 'pedantic': pedantic, 'sanitize': sanitize, 'xmp': xmp, 'full': full, 'tex': tex, 'pdf': pdf, 'texzip': texzip, 'rebuild': rebuild, 'sandbox': sandbox, 'prelude': prelude, 'title': title, 'css': css, 'scripts': scripts, 'scriptsx': scriptsx, 'htmlHeader': htmlHeader, 'cssHeader': cssHeader, 'jsHeader': jsHeader, 'htmlFooter': htmlFooter, 'jsFooter': jsFooter, 'htmlMeta': htmlMeta, 'texHeader': texHeader, 'texHeaderx': texHeaderx, 'texDocHeader': texDocHeader, 'texDocHeaderx': texDocHeaderx, 'texFooter': texFooter, 'texSectionNum': texSectionNum, 'bibStyle': bibStyle, 'bib': bib, 'locale_1': locale_1, 'packages': packages, 'packagesx': packagesx, 'docClass_1': docClass_1, 'citestyle': citestyle, 'citeAll': citeAll, 'tocDepth': tocDepth, 'headingDepth': headingDepth, 'headingBase': headingBase, 'sectionMax': sectionMax, 'sectionBase': sectionBase, 'starBold': starBold, 'prettyAlign': prettyAlign, 'logo': logo, 'math': math, 'highlight': highlight, 'hilitelang': hilitelang, 'pdflatex': pdflatex, 'bibtex': bibtex, 'latex_1': latex_1, 'processTimeout': processTimeout, 'zip': zip, 'metadata': metadata, 'embedinfos': embedinfos, 'embedLimit_1': embedLimit_1, 'lineNo': lineNo, 'lineNoWeb': lineNoWeb, 'copyStyles': copyStyles, 'lineMap': lineMap, 'extractStart': extractStart, 'extractEnd': extractEnd, '_copy_1': _copy_1, 'showVersion': showVersion, 'convertTex': convertTex, 'outputDir': outputDir, 'installDir': installDir, 'inputs': inputs, 'options': options, '_copy_2': _copy_2, '_createMathoptions': _createMathoptions, '_createOptions': _createOptions, '_createCommandOptions': _createCommandOptions, 'cflag': cflag, 'check': check, 'creq': creq, 'cutoff': cutoff, 'oflag': oflag, 'oreq': oreq, 'setbench': setbench, 'setMeta': setMeta, 'optionsDesc': optionsDesc, 'fullUsageInfo': fullUsageInfo, 'getDocName': getDocName, 'getMathjax': getMathjax, 'getMathLatex': getMathLatex, 'getMathLatexFull': getMathLatexFull, 'getMathRender_1': getMathRender_1, 'getMathRenderFull': getMathRenderFull, 'getMathRender': getMathRender, 'getMathScale': getMathScale, 'getPdfLatex': getPdfLatex, 'indent': indent, 'parseOptionList': parseOptionList, 'parseOptions': parseOptions, 'print': print, 'printErr': printErr };
});