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
	Margin,
	MarginBlock,
	MarginBlockEnd,
	MarginBlockStart,
	MarginBottom,
	MarginInline,
	MarginInlineEnd,
	MarginInlineStart,
	MarginLeft,
	MarginRight,
	MarginTop,
	Mask,
	MaskBorder,
	MaskBorderMode,
	MaskBorderOutset,
	MaskBorderRepeat,
	MaskBorderSlice,
	MaskBorderSource,
	MaskBorderWidth,
	MaskClip,
	MaskComposite,
	MaskImage,
	MaskMode,
	MaskOrigin,
	MaskPosition,
	MaskRepeat,
	MaskSize,
	MaskType,
	MaxBlockSize,
	MaxHeight,
	MaxInlineSize,
	MaxWidth,
	MinInlineSize,
	MinWidth,
	MixBlendMode,
	ObjectFit,
	ObjectPosition,
	Offset,
	OffsetAnchor,
	OffsetDistance,
	OffsetPath,
	OffsetRotate,
	Opacity,
	Order,
	Orphans,
	Outline,
	OutlineColor,
	OutlineOffset,
	OutlineStyle,
	OutlineWidth,
	Overflow,
	OverflowAnchor,
	OverflowBlock,
	OverflowInline,
	OverflowWrap,
	OverflowX,
	OverflowY,
	OverscrollBehavior,
	OverscrollBehaviorBlock,
	OverscrollBehaviorInline,
	OverscrollBehaviorX,
	OverscrollBehaviorY,
	Padding,
	PaddingBlock,
	PaddingBlockEnd,
	PaddingBlockStart,
	PaddingBlockBottom,
	PaddingBlockInline,
	PaddingBlockInlineEnd,
	PaddingBlockInlineStart,
	PaddingBottom,
	PaddingLeft,
	PaddingRight,
	PaddingTop,
	PageBreakAfter,
	PageBreakBefore,
	PageBreakInside,
	PaintOrder,
	Perspective,
	PerspectiveOrigin,
	PlaceContent,
	PlaceItems,
	PlaceSelf,
	PointerEvents,
	Position,
	Quotes,
	Resize,
	Right,
	RowGap,
	ScrollBehavior,
	ScrollMargin,
	ScrollMarginBlock,
	ScrollMarginBlockEnd,
	ScrollMarginBlockStart,
	ScrollMarginBottom,
	ScrollMarginInline,
	ScrollMarginInlineEnd,
	ScrollMarginInlineStart,
	ScrollMarginLeft,
	ScrollMarginRight,
	ScrollMarginTop,
	ScrollPadding,
	ScrollPaddingBlock,
	ScrollPaggindBlockEnd,
	ScrollPaddingBlockStart,
	ScrollPaddingBottom,
	ScrollPaddingInline,
	ScrollPaddingInlineEnd,
	ScrollPaddingInlineStart,
	ScrollPaddingLeft,
	ScrollPaddingRight,
	ScrollPaddingTop,
	ScrollSnapAlign,
	ScrollSnapStop,
	ScrollSnapType,
	ScrollbarColor,
	ScrollbarWidth,
	ShapeImageThreshold,
	ShapeMargin,
	ShapeOutside,
	TabSize,
	TableLayout,
	TextAlign,
	TextAlignLast,
	TextCombineUpright,
	TextDecoration,
	TextDecorationColor,
	TextDecorationLine,
	TextDecorationSkipInk,
	TextDecorationStyle,
	TextDecorationThickness,
	TextEmphasis,
	TextEmphasisColor,
	TextEmphasisPosition,
	TextEmphasisStyle,
	TextIndent,
	TextJustify,
	TextOrientation,
	TextOverflow,
	TextRendering,
	TextShadow,
	TextTransform,
	TextUnderlineOffset,
	TextUnderlinePosition,
	Top,
	TouchAction,
	Transform,
	TransformBox,
	TransformOrigin,
	TransformStyle,
	Transition,
	TransitionDelay,
	TransitionDuration,
	TransitionProperty,
	TransitionTimingFunction,
	UnicodeBidi,
	UserSelect,
	VerticalAlign,
	Visibility,
	WhiteSpace,
	Widows,
	Width,
	WillChange,
	WordBreak,
	WordSpacing,
	WordWrap,
	WritingMode,
	ZIndex,
	Zoom
}

/* SUFFIX */
const _BLOCK = `-block`;
const _COLOR = `-color`;
const _END = `-end`;
const _IMAGE = `-image`;
const _INLINE = `-inline`;
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
const BORDER_BLOCK = `${BORDER}${_BLOCK}`;
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
const INSET_BLOCK = `${INSET}${_BLOCK}`;
const INSET_INLINE = `${INSET}-inline`;
const JUSTIFY = `justify`;
const LINE = `line`;
const LIST_STYLE = `list${_STYLE}`;
const MARGIN = `margin`;
const MARGIN_BLOCK = `${MARGIN}${_BLOCK}`;
const MARGIN_INLINE = `${MARGIN}${_INLINE}`;
const MASK = `mask`;
const OBJECT = `object`;
const OFFSET = `offset`;
const OUTLINE = `outline`;

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
	[Prop.Margin]: MARGIN,
	[Prop.MarginBlock]: MARGIN_BLOCK,
	[Prop.MarginBlockEnd]: `${MARGIN_BLOCK}${_END}`,
	[Prop.MarginBlockStart]: `${MARGIN_BLOCK}${_START}`,
	[Prop.MarginBottom]: `${MARGIN}-bottom`,
	[Prop.MarginInline]: MARGIN_INLINE,
	[Prop.MarginInlineEnd]: `${MARGIN_INLINE}${_END}`,
	[Prop.MarginInlineStart]: `${MARGIN_INLINE}${_START}`,
	[Prop.MarginLeft]: `${MARGIN}-left`,
	[Prop.MarginRight]: `${MARGIN}-right`,
	[Prop.MarginTop]: `${MARGIN}-top`,
	[Prop.Mask]: MASK,
	[Prop.MaskBorder]: `${MASK}-border`,
	[Prop.MaskBorderMode]: `${MASK}-border-mode`,
	[Prop.MaskBorderOutset]: `${MASK}-border-outset`,
	[Prop.MaskBorderRepeat]: `${MASK}-border-repeat`,
	[Prop.MaskBorderSlice]: `${MASK}-border-slice`,
	[Prop.MaskBorderSource]: `${MASK}-border-source`,
	[Prop.MaskBorderWidth]: `${MASK}-border-width`,
	[Prop.MaskClip]: `${MASK}-clip`,
	[Prop.MaskComposite]: `${MASK}-composite`,
	[Prop.MaskImage]: `${MASK}-image`,
	[Prop.MaskMode]: `${MASK}-mode`,
	[Prop.MaskOrigin]: `${MASK}-origin`,
	[Prop.MaskPosition]: `${MASK}-position`,
	[Prop.MaskRepeat]: `${MASK}-repeat`,
	[Prop.MaskSize]: `${MASK}-size`,
	[Prop.MaskType]: `${MASK}-type`,
	[Prop.MaxBlockSize]: `max-block-size`,
	[Prop.MaxHeight]: `max-height`,
	[Prop.MaxInlineSize]: `max-inline-size`,
	[Prop.MaxWidth]: `max-width`,
	[Prop.MinInlineSize]: `min-inline-size`,
	[Prop.MinWidth]: `min-width`,
	[Prop.MixBlendMode]: `mix-blend-mode`,
	[Prop.ObjectFit]: `${OBJECT}-fit`,
	[Prop.ObjectPosition]: `${OBJECT}-position`,
	[Prop.Offset]: OFFSET,
	[Prop.OffsetAnchor]: `${OFFSET}-anchor`,
	[Prop.OffsetDistance]: `${OFFSET}-distance`,
	[Prop.OffsetPath]: `${OFFSET}-path`,
	[Prop.OffsetRotate]: `${OFFSET}-rotate`,
	[Prop.Opacity]: `opacity`,
	[Prop.Order]: `order`,
	[Prop.Orphans]: `orphans`,
	[Prop.Outline]: OUTLINE,
	[Prop.OutlineColor]: `${OUTLINE}-color`,
	[Prop.OutlineOffset]: `${OUTLINE}-offset`,
	[Prop.OutlineStyle]: `${OUTLINE}-style`,
	[Prop.OutlineWidth]: `${OUTLINE}-width`,
	[Prop.Overflow]: `overflow`,
	[Prop.OverflowAnchor]: `overflow-anchor`,
	[Prop.OverflowBlock]: `overflow-block`,
	[Prop.OverflowInline]: `overflow-inline`,
	[Prop.OverflowWrap]: `overflow-wrap`,
	[Prop.OverflowX]: `overflow-x`,
	[Prop.OverflowY]: `overflow-y`,
	[Prop.OverscrollBehavior]: `overscroll-behavior`,
	[Prop.OverscrollBehaviorBlock]: `overscroll-behavior-block`,
	[Prop.OverscrollBehaviorInline]: `overscroll-behavior-inline`,
	[Prop.OverscrollBehaviorX]: `overscroll-behavior-x`,
	[Prop.OverscrollBehaviorY]: `overscroll-behavior-y`,
	[Prop.Padding]: `padding`,
	[Prop.PaddingBlock]: `padding-block`,
	[Prop.PaddingBlockEnd]: `padding-block-end`,
	[Prop.PaddingBlockStart]: `padding-block-start`,
	[Prop.PaddingBlockBottom]: `padding-block-bottom`,
	[Prop.PaddingBlockInline]: `padding-block-inline`,
	[Prop.PaddingBlockInlineEnd]: `padding-block-inline-end`,
	[Prop.PaddingBlockInlineStart]: `padding-block-inline-start`,
	[Prop.PaddingBottom]: `padding-bottom`,
	[Prop.PaddingLeft]: `padding-left`,
	[Prop.PaddingRight]: `padding-right`,
	[Prop.PaddingTop]: `padding-top`,
	[Prop.PageBreakAfter]: `page-break-after`,
	[Prop.PageBreakBefore]: `page-break-before`,
	[Prop.PageBreakInside]: `page-break-inside`,
	[Prop.PaintOrder]: `paint-order`,
	[Prop.Perspective]: `perspective`,
	[Prop.PerspectiveOrigin]: `perspective-origin`,
	[Prop.PlaceContent]: `place-content`,
	[Prop.PlaceItems]: `place-items`,
	[Prop.PlaceSelf]: `place-self`,
	[Prop.PointerEvents]: `pointer-events`,
	[Prop.Position]: `position`,
	[Prop.Quotes]: `quotes`,
	[Prop.Resize]: `resize`,
	[Prop.Right]: `right`,
	[Prop.RowGap]: `row-gap`,
	[Prop.ScrollBehavior]: `scroll-behavior`,
	[Prop.ScrollMargin]: `scroll-margin`,
	[Prop.ScrollMarginBlock]: `scroll-margin-block`,
	[Prop.ScrollMarginBlockEnd]: `scroll-margin-block-end`,
	[Prop.ScrollMarginBlockStart]: `scroll-margin-block-start`,
	[Prop.ScrollMarginBottom]: `scroll-margin-bottom`,
	[Prop.ScrollMarginInline]: `scroll-margin-inline`,
	[Prop.ScrollMarginInlineEnd]: `scroll-margin-inline-end`,
	[Prop.ScrollMarginInlineStart]: `scroll-margin-inline-start`,
	[Prop.ScrollMarginLeft]: `scroll-margin-left`,
	[Prop.ScrollMarginRight]: `scroll-margin-right`,
	[Prop.ScrollMarginTop]: `scroll-margin-top`,
	[Prop.ScrollPadding]: `scroll-padding`,
	[Prop.ScrollPaddingBlock]: `scroll-padding-block`,
	[Prop.ScrollPaggindBlockEnd]: `scroll-padding-block-end`,
	[Prop.ScrollPaddingBlockStart]: `scroll-padding-block-start`,
	[Prop.ScrollPaddingBottom]: `scroll-padding-bottom`,
	[Prop.ScrollPaddingInline]: `scroll-padding-inline`,
	[Prop.ScrollPaddingInlineEnd]: `scroll-padding-inline-end`,
	[Prop.ScrollPaddingInlineStart]: `scroll-padding-inline-start`,
	[Prop.ScrollPaddingLeft]: `scroll-padding-left`,
	[Prop.ScrollPaddingRight]: `scroll-padding-right`,
	[Prop.ScrollPaddingTop]: `scroll-padding-top`,
	[Prop.ScrollSnapAlign]: `scroll-snap-align`,
	[Prop.ScrollSnapStop]: `scroll-snap-stop`,
	[Prop.ScrollSnapType]: `scroll-snap-type`,
	[Prop.ScrollbarColor]: `scrollbar-color`,
	[Prop.ScrollbarWidth]: `scrollbar-width`,
	[Prop.ShapeImageThreshold]: `shape-image-threshold`,
	[Prop.ShapeMargin]: `shape-margin`,
	[Prop.ShapeOutside]: `shape-outside`,
	[Prop.TabSize]: `tab-size`,
	[Prop.TableLayout]: `table-layout`,
	[Prop.TextAlign]: `text-align`,
	[Prop.TextAlignLast]: `text-align-last`,
	[Prop.TextCombineUpright]: `text-combine-upright`,
	[Prop.TextDecoration]: `text-decoration`,
	[Prop.TextDecorationColor]: `text-decoration-color`,
	[Prop.TextDecorationLine]: `text-decoration-line`,
	[Prop.TextDecorationSkipInk]: `text-decoration-skip-ink`,
	[Prop.TextDecorationStyle]: `text-decoration-style`,
	[Prop.TextDecorationThickness]: `text-decoration-thickness`,
	[Prop.TextEmphasis]: `text-emphasis`,
	[Prop.TextEmphasisColor]: `text-emphasis-color`,
	[Prop.TextEmphasisPosition]: `text-emphasis-position`,
	[Prop.TextEmphasisStyle]: `text-emphasis-style`,
	[Prop.TextIndent]: `text-indent`,
	[Prop.TextJustify]: `text-justify`,
	[Prop.TextOrientation]: `text-orientation`,
	[Prop.TextOverflow]: `text-overflow`,
	[Prop.TextRendering]: `text-rendering`,
	[Prop.TextShadow]: `text-shadow`,
	[Prop.TextTransform]: `text-transform`,
	[Prop.TextUnderlineOffset]: `text-underline-offset`,
	[Prop.TextUnderlinePosition]: `text-underline-position`,
	[Prop.Top]: `top`,
	[Prop.TouchAction]: `touch-action`,
	[Prop.Transform]: `transform`,
	[Prop.TransformBox]: `transform-box`,
	[Prop.TransformOrigin]: `transform-origin`,
	[Prop.TransformStyle]: `transform-style`,
	[Prop.Transition]: `transition`,
	[Prop.TransitionDelay]: `transition-delay`,
	[Prop.TransitionDuration]: `transition-duration`,
	[Prop.TransitionProperty]: `transition-property`,
	[Prop.TransitionTimingFunction]: `transition-timing-function`,
	[Prop.UnicodeBidi]: `unicode-bidi`,
	[Prop.UserSelect]: `user-select`,
	[Prop.VerticalAlign]: `vertical-align`,
	[Prop.Visibility]: `visibility`,
	[Prop.WhiteSpace]: `white-space`,
	[Prop.Widows]: `widows`,
	[Prop.Width]: `width`,
	[Prop.WillChange]: `will-change`,
	[Prop.WordBreak]: `word-break`,
	[Prop.WordSpacing]: `word-spacing`,
	[Prop.WordWrap]: `word-wrap`,
	[Prop.WritingMode]: `writing-mode`,
	[Prop.ZIndex]: `z-index`,
	[Prop.Zoom]: `zoom`
};

type AllShorthandProps = {
	m: string;
	ml: string;
	mr: string;
	mt: string;
	mb: string;
	mx: string;
	my: string;
	p: string;
	pl: string;
	pr: string;
	pt: string;
	pb: string;
	px: string;
	py: string;
};

export type AllProps = {
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
} & AllShorthandProps;

const shorthands = ['m', 'ml', 'mr', 'mt', 'mb', 'mx', 'my', 'p', 'pl', 'pr', 'pt', 'pb', 'px', 'py'];

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
	...shorthands
]);
