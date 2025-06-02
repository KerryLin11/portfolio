export const playSoundRandom = (
    src: string,
    initialVolume: number,
    volumeRange: number,
    initialPlaybackRate: number,
    playbackRateRange: number
) => {
    const audio = new Audio(src);
    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
    audio.volume = clamp(initialVolume + (Math.random() * 2 - 1) * volumeRange, 0, 1);
    audio.playbackRate = clamp(initialPlaybackRate + (Math.random() * 2 - 1) * playbackRateRange, 0.1, 4);
    audio.play().catch((e) => console.warn('Audio play error:', e));
};

const playSoundAndRun = (
    src: string,
    callback: () => void,
    volume: number = 0.5
) => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch((e) => console.error('SFX play failed', e));
    callback();
};

export const handleClose = (callback: () => void) =>
    playSoundAndRun('/sounds/close3.wav', callback, 0.5);

export const playSound = (src: string, volume: number = 0.5) => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch((e) => console.error('SFX play failed', e));
};