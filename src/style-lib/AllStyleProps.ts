import { shorthands } from './shorthands';

type ShorthandProps = Record<keyof typeof shorthands, string>;

/**
 * All CSS props
 */
export type AllStyleProps = {
	additiveSymbols: string;
	alignContent: string;
	alignItems: string;
	alignSelf: string;
	all: string;
	animation: string;
	animationDelay: string;
	animationDirection: string;
	animationDuration: string;
	animationFillMode: string;
	animationIterationCount: string;
	animationName: string;
	animationPlayState: string;
	animationTimingFunction: string;
	backdropFilter: string;
	backfaceVisibility: string;
	background: string;
	backgroundAttachment: string;
	backgroundBlendMode: string;
	backgroundClip: string;
	backgroundColor: string;
	backgroundImage: string;
	backgroundOrigin: string;
	backgroundPosition: string;
	backgroundRepeat: string;
	backgroundSize: string;
	bleed: string;
	blockSize: string;
	border: string;
	borderBlock: string;
	borderBlockColor: string;
	borderBlockEnd: string;
	borderBlockEndColor: string;
	borderBlockEndStyle: string;
	borderBlockEndWidth: string;
	borderBlockStart: string;
	borderBlockStartColor: string;
	borderBlockStartStyle: string;
	borderBlockStartWidth: string;
	borderBlockStyle: string;
	borderBlockWidth: string;
	borderBottom: string;
	borderBottomColor: string;
	borderBottomLeftRadius: string;
	borderBottomRightRadius: string;
	borderBottomStyle: string;
	borderBottomWidth: string;
	borderCollapse: string;
	borderColor: string;
	borderEndEndRadius: string;
	borderEndStartRadius: string;
	borderImage: string;
	borderImageOutset: string;
	borderImageRepeat: string;
	borderImageSlice: string;
	borderImageSource: string;
	borderImageWidth: string;
	borderInline: string;
	borderInlineColor: string;
	borderInlineEnd: string;
	borderInlineEndColor: string;
	borderInlineEndStyle: string;
	borderInlineEndWidth: string;
	borderInlineStart: string;
	borderInlineStartColor: string;
	borderInlineStartStyle: string;
	borderInlineStartWidth: string;
	borderInlineStyle: string;
	borderInlineWidth: string;
	borderLeft: string;
	borderLeftColor: string;
	borderLeftStyle: string;
	borderLeftWidth: string;
	borderRadius: string;
	borderRight: string;
	borderRightColor: string;
	borderRightStyle: string;
	borderRightWidth: string;
	borderSpacing: string;
	borderStartEndRadius: string;
	borderStartStartRadius: string;
	borderStyle: string;
	borderTop: string;
	borderTopColor: string;
	borderTopLeftRadius: string;
	borderTopRightRadius: string;
	borderTopStyle: string;
	borderTopWidth: string;
	borderWidth: string;
	bottom: string;
	boxDecorationBreak: string;
	boxShadow: string;
	boxSizing: string;
	breakAfter: string;
	breakBefore: string;
	breakInside: string;
	captionSide: string;
	caretColor: string;
	clear: string;
	clip: string;
	clipPath: string;
	color: string;
	colorAdjust: string;
	columnCount: string;
	columnFill: string;
	columnGap: string;
	columnRule: string;
	columnRuleColor: string;
	columnRuleStyle: string;
	columnRuleWidth: string;
	columnSpan: string;
	columnWidth: string;
	columns: string;
	contain: string;
	content: string;
	counterIncrement: string;
	counterReset: string;
	counterSet: string;
	cursor: string;
	direction: string;
	display: string;
	emptyCells: string;
	fallback: string;
	filter: string;
	flex: string;
	flexBasis: string;
	flexDirection: string;
	flexFlow: string;
	flexGrow: string;
	flexShrink: string;
	flexWrap: string;
	float: string;
	font: string;
	fontFamily: string;
	fontFeatureSettings: string;
	fontKerning: string;
	fontLanguageOverride: string;
	fontOpticalSizing: string;
	fontSize: string;
	fontSizeAdjust: string;
	fontStretch: string;
	fontStyle: string;
	fontSynthesis: string;
	fontVariant: string;
	fontVariantAlternates: string;
	fontVariantCaps: string;
	fontVariantEastAsian: string;
	fontVariantLigatures: string;
	fontVariantNumeric: string;
	fontVariantPosition: string;
	fontVariationSettings: string;
	fontWeight: string;
	gap: string;
	grid: string;
	gridArea: string;
	gridAutoColumns: string;
	gridAutoFlow: string;
	gridAutoRows: string;
	gridColumn: string;
	gridColumnEnd: string;
	gridColumnStart: string;
	gridRow: string;
	gridRowEnd: string;
	gridRowStart: string;
	gridTemplate: string;
	gridTemplateAreas: string;
	gridTemplateColumns: string;
	gridTemplateRows: string;
	hangingPunctuation: string;
	height: string;
	hyphens: string;
	imageOrientation: string;
	imageRendering: string;
	inlineSize: string;
	inset: string;
	insetBlock: string;
	insetBlockEnd: string;
	insetBlockStart: string;
	insetInline: string;
	insetInlineEnd: string;
	insetInlineStart: string;
	isolation: string;
	justifyContent: string;
	justifyItems: string;
	justifySelf: string;
	left: string;
	letterSpacing: string;
	lineBreak: string;
	lineHeight: string;
	listStyle: string;
	listStyleImage: string;
	listStylePosition: string;
	listStyleType: string;
	margin: string;
	marginBlock: string;
	marginBlockEnd: string;
	marginBlockStart: string;
	marginBottom: string;
	marginInline: string;
	marginInlineEnd: string;
	marginInlineStart: string;
	marginLeft: string;
	marginRight: string;
	marginTop: string;
	mask: string;
	maskBorder: string;
	maskBorderMode: string;
	maskBorderOutset: string;
	maskBorderRepeat: string;
	maskBorderSlice: string;
	maskBorderSource: string;
	maskBorderWidth: string;
	maskClip: string;
	maskComposite: string;
	maskImage: string;
	maskMode: string;
	maskOrigin: string;
	maskPosition: string;
	maskRepeat: string;
	maskSize: string;
	maskType: string;
	maxBlockSize: string;
	maxHeight: string;
	maxInlineSize: string;
	maxWidth: string;
	minHeight: string;
	minInlineSize: string;
	minWidth: string;
	mixBlendMode: string;
	objectFit: string;
	objectPosition: string;
	offset: string;
	offsetAnchor: string;
	offsetDistance: string;
	offsetPath: string;
	offsetRotate: string;
	opacity: string;
	order: string;
	orphans: string;
	outline: string;
	outlineColor: string;
	outlineOffset: string;
	outlineStyle: string;
	outlineWidth: string;
	overflow: string;
	overflowAnchor: string;
	overflowBlock: string;
	overflowInline: string;
	overflowWrap: string;
	overflowX: string;
	overflowY: string;
	overscrollBehavior: string;
	overscrollBehaviorBlock: string;
	overscrollBehaviorInline: string;
	overscrollBehaviorX: string;
	overscrollBehaviorY: string;
	padding: string;
	paddingBlock: string;
	paddingBlockEnd: string;
	paddingBlockStart: string;
	paddingBlockBottom: string;
	paddingBlockInline: string;
	paddingBlockInlineEnd: string;
	paddingBlockInlineStart: string;
	paddingBottom: string;
	paddingLeft: string;
	paddingRight: string;
	paddingTop: string;
	pageBreakAfter: string;
	pageBreakBefore: string;
	pageBreakInside: string;
	paintOrder: string;
	perspective: string;
	perspectiveOrigin: string;
	placeContent: string;
	placeItems: string;
	placeSelf: string;
	pointerEvents: string;
	position: string;
	quotes: string;
	resize: string;
	right: string;
	rowGap: string;
	scrollBehavior: string;
	scrollMargin: string;
	scrollMarginBlock: string;
	scrollMarginBlockEnd: string;
	scrollMarginBlockStart: string;
	scrollMarginBottom: string;
	scrollMarginInline: string;
	scrollMarginInlineEnd: string;
	scrollMarginInlineStart: string;
	scrollMarginLeft: string;
	scrollMarginRight: string;
	scrollMarginTop: string;
	scrollPadding: string;
	scrollPaddingBlock: string;
	scrollPaddingBlockEnd: string;
	scrollPaddingBlockStart: string;
	scrollPaddingBottom: string;
	scrollPaddingInline: string;
	scrollPaddingInlineEnd: string;
	scrollPaddingInlineStart: string;
	scrollPaddingLeft: string;
	scrollPaddingRight: string;
	scrollPaddingTop: string;
	scrollSnapAlign: string;
	scrollSnapStop: string;
	scrollSnapType: string;
	scrollbarColor: string;
	scrollbarWidth: string;
	shapeImageThreshold: string;
	shapeMargin: string;
	shapeOutside: string;
	tabSize: string;
	tableLayout: string;
	textAlign: string;
	textAlignLast: string;
	textCombineUpright: string;
	textDecoration: string;
	textDecorationColor: string;
	textDecorationLine: string;
	textDecorationSkipInk: string;
	textDecorationStyle: string;
	textDecorationThickness: string;
	textEmphasis: string;
	textEmphasisColor: string;
	textEmphasisPosition: string;
	textEmphasisStyle: string;
	textIndent: string;
	textJustify: string;
	textOrientation: string;
	textOverflow: string;
	textRendering: string;
	textShadow: string;
	textTransform: string;
	textUnderlineOffset: string;
	textUnderlinePosition: string;
	top: string;
	touchAction: string;
	transform: string;
	transformBox: string;
	transformOrigin: string;
	transformStyle: string;
	transition: string;
	transitionDelay: string;
	transitionDuration: string;
	transitionProperty: string;
	transitionTimingFunction: string;
	unicodeBidi: string;
	userSelect: string;
	verticalAlign: string;
	visibility: string;
	whiteSpace: string;
	widows: string;
	width: string;
	willChange: string;
	wordBreak: string;
	wordSpacing: string;
	wordWrap: string;
	writingMode: string;
	zIndex: string;
	zoom: string;

	/**
	 * Webkit
	 */
	webkitFontSmoothing: string;
	webkitMaskImage: string;

	/**
	 * Moz OSX
	 */
	mozOsxFontSmoothing: string;
} & ShorthandProps;

const animation = `animation`;
const background = `background`;
const border = `border`;
const borderBlock = `${border}Block`;
const borderBlockEnd = `${borderBlock}End`;
const borderBlockStart = `${borderBlock}Start`;
const borderBottom = `${border}Bottom`;
const borderImage = `${border}Image`;
const borderInline = `${border}Inline`;
const borderInlineEnd = `${borderInline}End`;
const borderInlineStart = `${borderInline}Start`;
const borderLeft = `${border}Left`;
const borderRight = `${border}Right`;
const borderStart = `${border}Start`;
const borderTop = `${border}Top`;
const columnRule = `columnRule`;
const fontVariant = `fontVariant`;
const gridColumn = `gridColumn`;
const gridTemplate = `gridTemplate`;
const insetInline = `insetInline`;
const listStyle = `listStyle`;
const margin = `margin`;
const maskBorder = `maskBorder`;
const offset = `offset`;
const outline = `outline`;
const overflow = `overflow`;
const overscrollBehavior = `overscrollBehavior`;
const padding = `padding`;
const paddingBlock = `${padding}Block`;
const scrollMargin = `scrollMargin`;
const scrollPadding = `scrollPadding`;
const textDecoration = `textDecoration`;
const textEmphasis = `textEmphasis`;
const transform = `transform`;
const transition = `transition`;

export const allPropsSet = new Set([
	`additiveSymbols`,
	`alignContent`,
	`alignItems`,
	`alignSelf`,
	`all`,
	animation,
	`${animation}Delay`,
	`${animation}Direction`,
	`${animation}Duration`,
	`${animation}FillMode`,
	`${animation}IterationCount`,
	`${animation}Name`,
	`${animation}PlayState`,
	`${animation}TimingFunction`,
	`backdropFilter`,
	`backfaceVisibility`,
	background,
	`${background}Attachment`,
	`${background}BlendMode`,
	`${background}Clip`,
	`${background}Color`,
	`${background}Image`,
	`${background}Origin`,
	`${background}Position`,
	`${background}Repeat`,
	`${background}Size`,
	`bleed`,
	`blockSize`,
	border,
	borderBlock,
	`${borderBlock}Color`,
	borderBlockEnd,
	`${borderBlockEnd}Color`,
	`${borderBlockEnd}Style`,
	`${borderBlockEnd}Width`,
	borderBlockStart,
	`${borderBlockStart}Color`,
	`${borderBlockStart}Style`,
	`${borderBlockStart}Width`,
	`${borderBlock}Style`,
	`${borderBlock}Width`,
	borderBottom,
	`${borderBottom}Color`,
	`${borderBottom}LeftRadius`,
	`${borderBottom}RightRadius`,
	`${borderBottom}Style`,
	`${borderBottom}Width`,
	`${border}Collapse`,
	`${border}Color`,
	`${border}EndEndRadius`,
	`${border}EndStartRadius`,
	borderImage,
	`${borderImage}Outset`,
	`${borderImage}Repeat`,
	`${borderImage}Slice`,
	`${borderImage}Source`,
	`${borderImage}Width`,
	borderInline,
	`${borderInline}Color`,
	borderInlineEnd,
	`${borderInlineEnd}Color`,
	`${borderInlineEnd}Style`,
	`${borderInlineEnd}Width`,
	borderInlineStart,
	`${borderInlineStart}Color`,
	`${borderInlineStart}Style`,
	`${borderInlineStart}Width`,
	`${borderInline}Style`,
	`${borderInline}Width`,
	borderLeft,
	`${borderLeft}Color`,
	`${borderLeft}Style`,
	`${borderLeft}Width`,
	`${border}Radius`,
	borderRight,
	`${borderRight}Color`,
	`${borderRight}Style`,
	`${borderRight}Width`,
	`${border}Spacing`,
	`${borderStart}EndRadius`,
	`${borderStart}StartRadius`,
	`${border}Style`,
	borderTop,
	`${borderTop}Color`,
	`${borderTop}LeftRadius`,
	`${borderTop}RightRadius`,
	`${borderTop}Style`,
	`${borderTop}Width`,
	`${border}Width`,
	`bottom`,
	`boxDecorationBreak`,
	`boxShadow`,
	`boxSizing`,
	`breakAfter`,
	`breakBefore`,
	`breakInside`,
	`captionSide`,
	`caretColor`,
	`clear`,
	`clip`,
	`clipPath`,
	`color`,
	`colorAdjust`,
	`columnCount`,
	`columnFill`,
	`columnGap`,
	columnRule,
	`${columnRule}Color`,
	`${columnRule}Style`,
	`${columnRule}Width`,
	`columnSpan`,
	`columnWidth`,
	`columns`,
	`contain`,
	`content`,
	`counterIncrement`,
	`counterReset`,
	`counterSet`,
	`cursor`,
	`direction`,
	`display`,
	`emptyCells`,
	`fallback`,
	`filter`,
	`flex`,
	`flexBasis`,
	`flexDirection`,
	`flexFlow`,
	`flexGrow`,
	`flexShrink`,
	`flexWrap`,
	`float`,
	`font`,
	`fontFamily`,
	`fontFeatureSettings`,
	`fontKerning`,
	`fontLanguageOverride`,
	`fontOpticalSizing`,
	`fontSize`,
	`fontSizeAdjust`,
	`fontStretch`,
	`fontStyle`,
	`fontSynthesis`,
	fontVariant,
	`${fontVariant}Alternates`,
	`${fontVariant}Caps`,
	`${fontVariant}EastAsian`,
	`${fontVariant}Ligatures`,
	`${fontVariant}Numeric`,
	`${fontVariant}Position`,
	`fontVariationSettings`,
	`fontWeight`,
	`gap`,
	`grid`,
	`gridArea`,
	`gridAutoColumns`,
	`gridAutoFlow`,
	`gridAutoRows`,
	gridColumn,
	`${gridColumn}End`,
	`${gridColumn}Start`,
	`gridRow`,
	`gridRowEnd`,
	`gridRowStart`,
	gridTemplate,
	`${gridTemplate}Areas`,
	`${gridTemplate}Columns`,
	`${gridTemplate}Rows`,
	`hangingPunctuation`,
	`height`,
	`hyphens`,
	`imageOrientation`,
	`imageRendering`,
	`inlineSize`,
	`inset`,
	`insetBlock`,
	`insetBlockEnd`,
	`insetBlockStart`,
	insetInline,
	`${insetInline}End`,
	`${insetInline}Start`,
	`isolation`,
	`justifyContent`,
	`justifyItems`,
	`justifySelf`,
	`left`,
	`letterSpacing`,
	`lineBreak`,
	`lineHeight`,
	listStyle,
	`${listStyle}Image`,
	`${listStyle}Position`,
	`${listStyle}Type`,
	margin,
	`${margin}Block`,
	`${margin}BlockEnd`,
	`${margin}BlockStart`,
	`${margin}Bottom`,
	`${margin}Inline`,
	`${margin}InlineEnd`,
	`${margin}InlineStart`,
	`${margin}Left`,
	`${margin}Right`,
	`${margin}Top`,
	`mask`,
	maskBorder,
	`${maskBorder}Mode`,
	`${maskBorder}Outset`,
	`${maskBorder}Repeat`,
	`${maskBorder}Slice`,
	`${maskBorder}Source`,
	`${maskBorder}Width`,
	`maskClip`,
	`maskComposite`,
	`maskImage`,
	`maskMode`,
	`maskOrigin`,
	`maskPosition`,
	`maskRepeat`,
	`maskSize`,
	`maskType`,
	`maxBlockSize`,
	`maxHeight`,
	`maxInlineSize`,
	`maxWidth`,
	`minInlineSize`,
	`minHeight`,
	`minWidth`,
	`mixBlendMode`,
	`objectFit`,
	`objectPosition`,
	offset,
	`${offset}Anchor`,
	`${offset}Distance`,
	`${offset}Path`,
	`${offset}Rotate`,
	`opacity`,
	`order`,
	`orphans`,
	outline,
	`${outline}Color`,
	`${outline}Offset`,
	`${outline}Style`,
	`${outline}Width`,
	overflow,
	`${overflow}Anchor`,
	`${overflow}Block`,
	`${overflow}Inline`,
	`${overflow}Wrap`,
	`${overflow}X`,
	`${overflow}Y`,
	overscrollBehavior,
	`${overscrollBehavior}Block`,
	`${overscrollBehavior}Inline`,
	`${overscrollBehavior}X`,
	`${overscrollBehavior}Y`,
	padding,
	paddingBlock,
	`${paddingBlock}End`,
	`${paddingBlock}Start`,
	`${paddingBlock}Bottom`,
	`${paddingBlock}Inline`,
	`${paddingBlock}InlineEnd`,
	`${paddingBlock}InlineStart`,
	`${padding}Bottom`,
	`${padding}Left`,
	`${padding}Right`,
	`${padding}Top`,
	`pageBreakAfter`,
	`pageBreakBefore`,
	`pageBreakInside`,
	`paintOrder`,
	`perspective`,
	`perspectiveOrigin`,
	`placeContent`,
	`placeItems`,
	`placeSelf`,
	`pointerEvents`,
	`position`,
	`quotes`,
	`resize`,
	`right`,
	`rowGap`,
	`scrollBehavior`,
	scrollMargin,
	`${scrollMargin}Block`,
	`${scrollMargin}BlockEnd`,
	`${scrollMargin}BlockStart`,
	`${scrollMargin}Bottom`,
	`${scrollMargin}Inline`,
	`${scrollMargin}InlineEnd`,
	`${scrollMargin}InlineStart`,
	`${scrollMargin}Left`,
	`${scrollMargin}Right`,
	`${scrollMargin}Top`,
	scrollPadding,
	`${scrollPadding}Block`,
	`${scrollPadding}BlockEnd`,
	`${scrollPadding}BlockStart`,
	`${scrollPadding}Bottom`,
	`${scrollPadding}Inline`,
	`${scrollPadding}InlineEnd`,
	`${scrollPadding}InlineStart`,
	`${scrollPadding}Left`,
	`${scrollPadding}Right`,
	`${scrollPadding}Top`,
	`scrollSnapAlign`,
	`scrollSnapStop`,
	`scrollSnapType`,
	`scrollbarColor`,
	`scrollbarWidth`,
	`shapeImageThreshold`,
	`shapeMargin`,
	`shapeOutside`,
	`tabSize`,
	`tableLayout`,
	`textAlign`,
	`textAlignLast`,
	`textCombineUpright`,
	textDecoration,
	`${textDecoration}Color`,
	`${textDecoration}Line`,
	`${textDecoration}SkipInk`,
	`${textDecoration}Style`,
	`${textDecoration}Thickness`,
	textEmphasis,
	`${textEmphasis}Color`,
	`${textEmphasis}Position`,
	`${textEmphasis}Style`,
	`textIndent`,
	`textJustify`,
	`textOrientation`,
	`textOverflow`,
	`textRendering`,
	`textShadow`,
	`textTransform`,
	`textUnderlineOffset`,
	`textUnderlinePosition`,
	`top`,
	`touchAction`,
	transform,
	`${transform}Box`,
	`${transform}Origin`,
	`${transform}Style`,
	transition,
	`${transition}Delay`,
	`${transition}Duration`,
	`${transition}Property`,
	`${transition}TimingFunction`,
	`unicodeBidi`,
	`userSelect`,
	`verticalAlign`,
	`visibility`,
	`whiteSpace`,
	`widows`,
	`width`,
	`willChange`,
	`wordBreak`,
	`wordSpacing`,
	`wordWrap`,
	`writingMode`,
	`zIndex`,
	`zoom`,

	/**
	 * Webkit
	 */
	`webkitFontSmoothing`,
	`webkitMaskImage`,

	/**
	 * Moz OSX
	 */
	`mozOsxFontSmoothing`,

	...Object.keys(shorthands)
]);
