input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 191, 29, 729, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.setBuiltInSpeakerEnabled(true)
})
