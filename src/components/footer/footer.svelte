<!-- <script>
  import TimelineSlider from './components/timelineSlider.svelte';
  import Controls from './components/controls.svelte';

  // speed of the playback
  let speed = 1;

  // max speed
  let maxSpeed = 2;

  // is the playback playing?
  let playbackPlaying = false;

  // playback slider value
  let slider = 0;

  // playback slider value
  let sliderValue = 0;

  // length of playback
  let sliderLength;

  //
</script>

<div class="player">
  <div class="timeline-slider">
    <div class="timeline">
      <small class="time" />
      <small class="fulltime" />
    </div>
    <TimelineSlider min={0} {slider} {sliderValue} {sliderLength} />
  </div>
  <Controls />
</div>

<style>
  .player {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: 2.5em;
    color: #eee;
  }

  .progress {
    width: 0;
    height: 0.4em;
    border-radius: 3px;
    background: linear-gradient (90deg, #c72611, #e75709);
    position: absolute;
  }
</style> -->
<script lang="ts">
  import TimelineSlider from './components/timelineSlider.svelte';
</script>

<TimelineSlider />
