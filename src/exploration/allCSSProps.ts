// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
const enum Prop {
	AdditiveSymbols,
	AlignContent,
	AlignItems,
	AlignSelf,
	All,
	Animation,
	AnimationDelay,
	AnimationDirection,
	AnimationDuration,
	AnimationFillMode,
	AnimationIterationCount,
	AnimationName,
	AnimationPlayState,
	AnimationTimingFunction,
	BackdropFilter,
	BackfaceVisibility,
	Background,
	BackgroundAttachment,
	BackgroundBlendMode,
	BackgroundClip,
	BackgroundColor,
	BackgroundImage,
	BackgroundOrigin,
	BackgroundPosition,
	BackgroundRepeat,
	BackgroundSize,
	Bleed,
	BlockSize,
	Border,
	BorderBlock,
	BorderBlockColor,
	BorderBlockEnd,
	BorderBlockEndColor,
	BorderBlockEndStyle,
	BorderBlockEndWidth,
	BorderBlockStart,
	BorderBlockStartColor,
	BorderBlockStartStyle,
	BorderBlockStartWidth,
	BorderBlockStyle,
	BorderBlockWidth,
	BorderBottom,
	BorderBottomColor,
	BorderBottomLeftRadius,
	BorderBottomRightRadius,
	BorderBottomStyle,
	BorderBottomWidth,
	BorderCollapse,
	BorderColor,
	BorderEndEndRadius,
	BorderEndStartRadius,
	BorderImage,
	BorderImageOutset,
	BorderImageRepeat,
	BorderImageSlice,
	BorderImageSource,
	BorderImageWidth,
	BorderInline,
	BorderInlineColor,
	BorderInlineEnd,
	BorderInlineEndColor,
	BorderInlineEndStyle,
	BorderInlineEndWidth,
	BorderInlineStart,
	BorderInlineStartColor,
	BorderInlineStartStyle,
	BorderInlineStartWidth,
	BorderInlineStyle,
	BorderInlineWidth,
	BorderLeft,
	BorderLeftColor,
	BorderLeftStyle,
	BorderLeftWidth,
	BorderRadius,
	BorderRight,
	BorderRightColor,
	BorderRightStyle,
	BorderRightWidth,
	BorderSpacing,
	BorderStartEndRadius,
	BorderStartStartRadius,
	BorderStyle,
	BorderTop,
	BorderTopColor,
	BorderTopLeftRadius,
	BorderTopRightRadius,
	BorderTopStyle,
	BorderTopWidth,
	BorderWidth,
	Bottom,
	BoxDecorationBreak,
	BoxShadow,
	BoxSizing,
	BreakAfter,
	BreakBefore,
	BreakInside,
	CaptionSide,
	CaretColor,
	Clear,
	Clip,
	ClipPath,
	Color,
	ColorAdjust,
	ColumnCount,
	ColumnFill,
	ColumnGap,
	ColumnRule,
	ColumnRuleColor,
	ColumnRuleStyle,
	ColumnRuleWidth,
	ColumnSpan,
	ColumnWidth,
	Columns,
	Contain,
	Content,
	CounterIncrement,
	CounterReset,
	CounterSet,
	Cursor,
	Direction,
	Display,
	EmptyCells,
	Fallback,
	Filter,
	Flex,
	FlexBasis,
	FlexDirection,
	FlexFlow,
	FlexGrow,
	FlexShrink,
	FlexWrap,
	Float,
	Font,
	FontFamily,
	FontFeatureSettings,
	FontKerning,
	FontLanguageOverride,
	FontOpticalSizing,
	FontSize,
	FontSizeAdjust,
	FontStretch,
	FontStyle,
	FontSynthesis,
	FontVariant,
	FontVariantAlternatives,
	FontVariantCaps,
	FontVariantEastAsian,
	FontVariantLigatures,
	FontVariantNumeric,
	FontVariantPosition,
	FontVariationSettings,
	FontWeight,
	Gap,
	Grid,
	GridArea,
	GridAutoColumns,
	GridAutoFlow,
	GridAutoRows,
	GridColumn,
	GridColumnEnd,
	GridColumnStart,
	GridRow,
	GridRowEnd,
	GridRowStart,
	GridTemplate,
	GridTemplateAreas,
	GridTemplateColumns,
	GridTemplateRows,
	HangingPunctuation,
	Height,
	Hyphens,
	ImageOrientation,
	ImageRendering,
	InlineSize,
	Inset,
	InsetBlock,
	InsetBlockEnd,
	InsetBlockStart,
	InsetInline,
	InsetInlineEnd,
	InsetInlineStart,
	Isolation,
	JustifyContent,
	JustifyItems,
	JustifySelf,
	Left,
	LetterSpacing,
	LineBreak,
	LineHeight,
	ListStyle,
	ListStyleImage,
	ListStylePosition,
	ListStyleType,

	// TODO

	Width
}

/* SUFFIX */
const _COLOR = `-color`;
const _END = `-end`;
const _IMAGE = `-image`;
const _LEFT = `-left`;
const _POSITION = `-position`;
const _RADIUS = `-radius`;
const _RIGHT = `-right`;
const _SIZE = `-size`;
const _SPACING = `-spacing`;
const _START = `-start`;
const _STYLE = `-style`;
const _WIDTH = `-width`;

/* PREFIX */
const ALIGN = `align`;
const ANIMATION = `animation`;
const BACKGROUND = `background`;
const BORDER = `border`;
const BORDER_BLOCK = `${BORDER}-block`;
const BORDER_BLOCK_START = `${BORDER_BLOCK}${_START}`;
const BORDER_BLOCK_END = `${BORDER_BLOCK}${_END}`;
const BORDER_BOTTOM = `${BORDER}-bottom`;
const BORDER_END = `${BORDER}${_END}`;
const BORDER_IMAGE = `${BORDER}${_IMAGE}`;
const BORDER_INLINE = `${BORDER}-inline`;
const BORDER_INLINE_END = `${BORDER_INLINE}${_END}`;
const BORDER_INLINE_START = `${BORDER_INLINE}${_START}`;
const BORDER_LEFT = `${BORDER}${_LEFT}`;
const BORDER_RIGHT = `${BORDER}${_RIGHT}`;
const BORDER_START = `${BORDER}${_START}`;
const BORDER_TOP = `${BORDER}-top`;
const BOX = `box`;
const BREAK = `break`;
const CLIP = `clip`;
const COLOR = `color`;
const COLUMN = `column`;
const COLUMN_RULE = `${COLUMN}-rule`;
const COUNTER = `counter`;
const FLEX = `flex`;
const FONT = `font`;
const FONT_SIZE = `${FONT}${_SIZE}`;
const FONT_VARIANT = `${FONT}-variant`;
const GRID = `grid`;
const GRID_AUTO = `${GRID}-auto`;
const GRID_COLUMN = `${GRID}-column`;
const GRID_ROW = `${GRID}-row`;
const GRID_TEMPLATE = `${GRID}-template`;
const IMAGE = `image`;
const INSET = `inset`;
const INSET_BLOCK = `${INSET}-block`;
const INSET_INLINE = `${INSET}-inline`;
const JUSTIFY = `justify`;
const LINE = `line`;
const LIST_STYLE = `list${_STYLE}`;

const propNameMap: { [key in Prop]: string } = {
	[Prop.AdditiveSymbols]: `additive-symbols`,
	[Prop.AlignContent]: `${ALIGN}-content`,
	[Prop.AlignItems]: `${ALIGN}-items`,
	[Prop.AlignSelf]: `${ALIGN}-self`,
	[Prop.All]: `all`,
	[Prop.Animation]: ANIMATION,
	[Prop.AnimationDelay]: `${ANIMATION}-delay`,
	[Prop.AnimationDirection]: `${ANIMATION}-direction`,
	[Prop.AnimationDuration]: `${ANIMATION}-duration`,
	[Prop.AnimationFillMode]: `${ANIMATION}-fill-mode`,
	[Prop.AnimationIterationCount]: `${ANIMATION}-iteration-count`,
	[Prop.AnimationName]: `${ANIMATION}-name`,
	[Prop.AnimationPlayState]: `${ANIMATION}-play-state`,
	[Prop.AnimationTimingFunction]: `${ANIMATION}-timing-function`,
	[Prop.BackdropFilter]: `backdrop-filter`,
	[Prop.BackfaceVisibility]: `backface-visibility`,
	[Prop.Background]: BACKGROUND,
	[Prop.BackgroundAttachment]: `${BACKGROUND}-attachment`,
	[Prop.BackgroundBlendMode]: `${BACKGROUND}-blend-mode`,
	[Prop.BackgroundClip]: `${BACKGROUND}-clip`,
	[Prop.BackgroundColor]: `${BACKGROUND}${_COLOR}`,
	[Prop.BackgroundImage]: `${BACKGROUND}${_IMAGE}`,
	[Prop.BackgroundOrigin]: `${BACKGROUND}-origin`,
	[Prop.BackgroundPosition]: `${BACKGROUND}${_POSITION}`,
	[Prop.BackgroundRepeat]: `${BACKGROUND}-repeat`,
	[Prop.BackgroundSize]: `${BACKGROUND}${_SIZE}`,
	[Prop.Bleed]: `bleed`,
	[Prop.BlockSize]: `block${_SIZE}`,
	[Prop.Border]: BORDER,
	[Prop.BorderBlock]: BORDER_BLOCK,
	[Prop.BorderBlockColor]: `${BORDER_BLOCK}${_COLOR}`,
	[Prop.BorderBlockEnd]: BORDER_BLOCK_END,
	[Prop.BorderBlockEndColor]: `${BORDER_BLOCK_END}${_COLOR}`,
	[Prop.BorderBlockEndStyle]: `${BORDER_BLOCK_END}${_STYLE}`,
	[Prop.BorderBlockEndWidth]: `${BORDER_BLOCK_END}${_WIDTH}`,
	[Prop.BorderBlockStart]: BORDER_BLOCK_START,
	[Prop.BorderBlockStartColor]: `${BORDER_BLOCK_START}${_COLOR}`,
	[Prop.BorderBlockStartStyle]: `${BORDER_BLOCK_START}${_STYLE}`,
	[Prop.BorderBlockStartWidth]: `${BORDER_BLOCK_START}${_WIDTH}`,
	[Prop.BorderBlockStyle]: `${BORDER_BLOCK}${_STYLE}`,
	[Prop.BorderBlockWidth]: `${BORDER_BLOCK}${_WIDTH}`,
	[Prop.BorderBottom]: BORDER_BOTTOM,
	[Prop.BorderBottomColor]: `${BORDER_BOTTOM}${_COLOR}`,
	[Prop.BorderBottomLeftRadius]: `${BORDER_BOTTOM}${_LEFT}${_RADIUS}`,
	[Prop.BorderBottomRightRadius]: `${BORDER_BOTTOM}${_RIGHT}${_RADIUS}`,
	[Prop.BorderBottomStyle]: `${BORDER_BOTTOM}${_STYLE}`,
	[Prop.BorderBottomWidth]: `${BORDER_BOTTOM}${_WIDTH}`,
	[Prop.BorderCollapse]: `${BORDER}-collapse`,
	[Prop.BorderColor]: `${BORDER}${_COLOR}`,
	[Prop.BorderEndEndRadius]: `${BORDER_END}${_END}${_RADIUS}`,
	[Prop.BorderEndStartRadius]: `${BORDER_END}${_START}${_RADIUS}`,
	[Prop.BorderImage]: BORDER_IMAGE,
	[Prop.BorderImageOutset]: `${BORDER_IMAGE}-outset`,
	[Prop.BorderImageRepeat]: `${BORDER_IMAGE}-repeat`,
	[Prop.BorderImageSlice]: `${BORDER_IMAGE}-slice`,
	[Prop.BorderImageSource]: `${BORDER_IMAGE}-source`,
	[Prop.BorderImageWidth]: `${BORDER_IMAGE}${_WIDTH}`,
	[Prop.BorderInline]: BORDER_INLINE,
	[Prop.BorderInlineColor]: `${BORDER_INLINE}${_COLOR}`,
	[Prop.BorderInlineEnd]: BORDER_INLINE_END,
	[Prop.BorderInlineEndColor]: `${BORDER_INLINE_END}${_COLOR}`,
	[Prop.BorderInlineEndStyle]: `${BORDER_INLINE_END}${_STYLE}`,
	[Prop.BorderInlineEndWidth]: `${BORDER_INLINE_END}${_WIDTH}`,
	[Prop.BorderInlineStart]: BORDER_INLINE_START,
	[Prop.BorderInlineStartColor]: `${BORDER_INLINE_START}${_COLOR}`,
	[Prop.BorderInlineStartStyle]: `${BORDER_INLINE_START}${_STYLE}`,
	[Prop.BorderInlineStartWidth]: `${BORDER_INLINE_START}${_WIDTH}`,
	[Prop.BorderInlineStyle]: `${BORDER_INLINE}${_STYLE}`,
	[Prop.BorderInlineWidth]: `${BORDER_INLINE}${_WIDTH}`,
	[Prop.BorderLeft]: BORDER_LEFT,
	[Prop.BorderLeftColor]: `${BORDER_LEFT}${_COLOR}`,
	[Prop.BorderLeftStyle]: `${BORDER_LEFT}${_STYLE}`,
	[Prop.BorderLeftWidth]: `${BORDER_LEFT}${_WIDTH}`,
	[Prop.BorderRadius]: `${BORDER}${_RADIUS}`,
	[Prop.BorderRight]: BORDER_RIGHT,
	[Prop.BorderRightColor]: `${BORDER_RIGHT}${_COLOR}`,
	[Prop.BorderRightStyle]: `${BORDER_RIGHT}${_STYLE}`,
	[Prop.BorderRightWidth]: `${BORDER_RIGHT}${_WIDTH}`,
	[Prop.BorderSpacing]: `${BORDER}${_SPACING}`,
	[Prop.BorderStartEndRadius]: `${BORDER_START}${_END}${_RADIUS}`,
	[Prop.BorderStartStartRadius]: `${BORDER_START}${_START}${_RADIUS}`,
	[Prop.BorderStyle]: `${BORDER}${_STYLE}`,
	[Prop.BorderTop]: BORDER_TOP,
	[Prop.BorderTopColor]: `${BORDER_TOP}${_COLOR}`,
	[Prop.BorderTopLeftRadius]: `${BORDER_TOP}${_LEFT}${_RADIUS}`,
	[Prop.BorderTopRightRadius]: `${BORDER_TOP}${_RIGHT}${_RADIUS}`,
	[Prop.BorderTopStyle]: `${BORDER_TOP}${_STYLE}`,
	[Prop.BorderTopWidth]: `${BORDER_TOP}${_WIDTH}`,
	[Prop.BorderWidth]: `${BORDER}${_WIDTH}`,
	[Prop.Bottom]: `bottom`,
	[Prop.BoxDecorationBreak]: `${BOX}-decoration-break`,
	[Prop.BoxShadow]: `${BOX}-shadow`,
	[Prop.BoxSizing]: `${BOX}-sizing`,
	[Prop.BreakAfter]: `${BREAK}-after`,
	[Prop.BreakBefore]: `${BREAK}-before`,
	[Prop.BreakInside]: `${BREAK}-inside`,
	[Prop.CaptionSide]: `caption-side`,
	[Prop.CaretColor]: `caret${_COLOR}`,
	[Prop.Clear]: `clear`,
	[Prop.Clip]: CLIP,
	[Prop.ClipPath]: `${CLIP}-path`,
	[Prop.Color]: COLOR,
	[Prop.ColorAdjust]: `${COLOR}-adjust`,
	[Prop.ColumnCount]: `${COLUMN}-count`,
	[Prop.ColumnFill]: `${COLUMN}-fill`,
	[Prop.ColumnGap]: `${COLUMN}-gap`,
	[Prop.ColumnRule]: COLUMN_RULE,
	[Prop.ColumnRuleColor]: `${COLUMN_RULE}${_COLOR}`,
	[Prop.ColumnRuleStyle]: `${COLUMN_RULE}${_STYLE}`,
	[Prop.ColumnRuleWidth]: `${COLUMN_RULE}${_WIDTH}`,
	[Prop.ColumnSpan]: `${COLUMN}-span`,
	[Prop.ColumnWidth]: `${COLUMN}${_WIDTH}`,
	[Prop.Columns]: `columns`,
	[Prop.Contain]: `contain`,
	[Prop.Content]: `content`,
	[Prop.CounterIncrement]: `${COUNTER}-increment`,
	[Prop.CounterReset]: `${COUNTER}-reset`,
	[Prop.CounterSet]: `${COUNTER}-set`,
	[Prop.Cursor]: `cursor`,
	[Prop.Direction]: `direction`,
	[Prop.Display]: `display`,
	[Prop.EmptyCells]: `empty-cells`,
	[Prop.Fallback]: `fallback`,
	[Prop.Filter]: `filter`,
	[Prop.Flex]: FLEX,
	[Prop.FlexBasis]: `${FLEX}-basis`,
	[Prop.FlexDirection]: `${FLEX}-direction`,
	[Prop.FlexFlow]: `${FLEX}-flow`,
	[Prop.FlexGrow]: `${FLEX}-grow`,
	[Prop.FlexShrink]: `${FLEX}-shrink`,
	[Prop.FlexWrap]: `${FLEX}-wrap`,
	[Prop.Float]: `float`,
	[Prop.Font]: FONT,
	[Prop.FontFamily]: `${FONT}-family`,
	[Prop.FontFeatureSettings]: `${FONT}-feature-settings`,
	[Prop.FontKerning]: `${FONT}-kerning`,
	[Prop.FontLanguageOverride]: `${FONT}-language-override`,
	[Prop.FontOpticalSizing]: `${FONT}-optical-sizing`,
	[Prop.FontSize]: FONT_SIZE,
	[Prop.FontSizeAdjust]: `${FONT_SIZE}-adjust`,
	[Prop.FontStretch]: `${FONT}-stretch`,
	[Prop.FontStyle]: `${FONT}${_STYLE}`,
	[Prop.FontSynthesis]: `${FONT}-synthesis`,
	[Prop.FontVariant]: FONT_VARIANT,
	[Prop.FontVariantAlternatives]: `${FONT_VARIANT}-alternates`,
	[Prop.FontVariantCaps]: `${FONT_VARIANT}-caps`,
	[Prop.FontVariantEastAsian]: `${FONT_VARIANT}-east-asian`,
	[Prop.FontVariantLigatures]: `${FONT_VARIANT}-ligatures`,
	[Prop.FontVariantNumeric]: `${FONT_VARIANT}-numeric`,
	[Prop.FontVariantPosition]: `${FONT_VARIANT}${_POSITION}`,
	[Prop.FontVariationSettings]: `${FONT}-variation-settings`,
	[Prop.FontWeight]: `${FONT}-weight`,
	[Prop.Gap]: `gap`,
	[Prop.Grid]: GRID,
	[Prop.GridArea]: `${GRID}-area`,
	[Prop.GridAutoColumns]: `${GRID_AUTO}-columns`,
	[Prop.GridAutoFlow]: `${GRID_AUTO}-flow`,
	[Prop.GridAutoRows]: `${GRID_AUTO}-rows`,
	[Prop.GridColumn]: GRID_COLUMN,
	[Prop.GridColumnEnd]: `${GRID_COLUMN}${_END}`,
	[Prop.GridColumnStart]: `${GRID_COLUMN}${_START}`,
	[Prop.GridRow]: GRID_ROW,
	[Prop.GridRowEnd]: `${GRID_ROW}${_END}`,
	[Prop.GridRowStart]: `${GRID_ROW}${_START}`,
	[Prop.GridTemplate]: GRID_TEMPLATE,
	[Prop.GridTemplateAreas]: `${GRID_TEMPLATE}-areas`,
	[Prop.GridTemplateColumns]: `${GRID_TEMPLATE}-columns`,
	[Prop.GridTemplateRows]: `${GRID_TEMPLATE}-rows`,
	[Prop.HangingPunctuation]: `hanging-punctuation`,
	[Prop.Height]: `height`,
	[Prop.Hyphens]: `hyphens`,
	[Prop.ImageOrientation]: `${IMAGE}-orientation`,
	[Prop.ImageRendering]: `${IMAGE}-rendering`,
	[Prop.InlineSize]: `inline${_SIZE}`,
	[Prop.Inset]: INSET,
	[Prop.InsetBlock]: INSET_BLOCK,
	[Prop.InsetBlockEnd]: `${INSET_BLOCK}${_END}`,
	[Prop.InsetBlockStart]: `${INSET_BLOCK}${_START}`,
	[Prop.InsetInline]: INSET_INLINE,
	[Prop.InsetInlineEnd]: `${INSET_INLINE}${_END}`,
	[Prop.InsetInlineStart]: `${INSET_INLINE}${_START}`,
	[Prop.Isolation]: `isolation`,
	[Prop.JustifyContent]: `${JUSTIFY}-content`,
	[Prop.JustifyItems]: `${JUSTIFY}-items`,
	[Prop.JustifySelf]: `${JUSTIFY}-self`,
	[Prop.Left]: `left`,
	[Prop.LetterSpacing]: `letter${_SPACING}`,
	[Prop.LineBreak]: `${LINE}-break`,
	[Prop.LineHeight]: `${LINE}-height`,
	[Prop.ListStyle]: LIST_STYLE,
	[Prop.ListStyleImage]: `${LIST_STYLE}${_IMAGE}`,
	[Prop.ListStylePosition]: `${LIST_STYLE}${_POSITION}`,
	[Prop.ListStyleType]: `${LIST_STYLE}-type`,

	[Prop.Width]: `width`
};

interface Obj {
	[Prop.Background]?: string;
	[Prop.LineHeight]?: string;
	[Prop.Width]?: string;

	[key: string]: any;
}

const obj: Obj = {
	[Prop.Background]: 'orange',
	[Prop.Width]: '10px',
	fontSize: '20px'
};

for (var key in obj) {
	// @ts-ignore
	var propName: string = propNameMap[key];
	if (propName === undefined) {
		propName = key;
	}

	// @ts-ignore
	var propVal: string = obj[key];

	var xxx = `${propName}:${propVal}`;
	console.log(xxx);
}
