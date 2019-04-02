import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bubble from './Bubble';

import * as d3 from "d3";

const _ = require('lodash');

export class Bubbles extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    topicColors: PropTypes.object.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    space: PropTypes.number,
  };

  static defaultProps = {
    data: [],
    useLabels: false,
    width: 1000,
    height: 1000,
    space: 25,
  };

  constructor(props) {
    super(props);

    this.mounted = false;

    this.state = {
      data: [],
      inHoverTransition: false,
    };

    this.radiusScale = this.radiusScale.bind(this);
    this.simulatePositions = this.simulatePositions.bind(this);
    this.renderBubbles = this.renderBubbles.bind(this);
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.simulatePositions(this.props.data);
    }
  }

  getRadius(d) {
    if (this.isHovered(d)) {
      return 150;
    }
    else {
      return d.importance;
    }
  }

  getSize(d) {
    return this.radiusScale(this.getRadius(d))
  }

  getTitle(d) {
    return d.title;
  }

  getID(d) {
    return d.id;
  }

  getImgID(d) {
    return "img-" + this.getID(d);
  }

  getThumbnailUrl(d) {
    return d.thumbnail_url;
  }

  getArticleUrl(d) {
    return d.article_url;
  }

  getTopic(d) {
    return d.topic;
  }

  getTopicColor(d) {
    return this.props.topicColors[this.getTopic(d)];
  }

  isHovered(d) {
    const id = this.getID(d);
    return this.state.hover === id;
  }

  setHover(id) {
    this.setState({
      ...this.state,
      // can only hover one item
      hover: id
    })
  }

  resetSimulationData() {
    setTimeout(() => {
      this.simulation.nodes(this.state.data);
      this.simulation.restart();
      this.simulation.alpha(0.3);
      
    }, 20);
  }

  getOnMouseEnter(d) {
    return () => {
      console.log("enter")
      this.setHover(this.getID(d));
      this.resetSimulationData();

    }
  }

  getOnMouseLeave(d) {
    return () => {
      if (!this.state.inHoverTransition) {
        console.log("leave")
        this.setHover(undefined);
        this.resetSimulationData();
      }
    }
  }

  getOnClickBubble(d) {
    return () => {
      this.setHover(undefined);
      this.resetSimulationData();
      window.open(this.getArticleUrl(d))
    }
  }

  radiusScale = value => {
    const fx = d3
        .scaleSqrt()
        .range([1, 50])
        .domain([this.minValue, this.maxValue]);

    return fx(value);
  };

  simulatePositions = data => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
    this.simulation.velocityDecay(0.5)
      .force("x", d3.forceX(0).strength(0.05))
      .force("y", d3.forceY(0).strength(0.05))
      .force("collide", d3.forceCollide(
        d => this.getRadius(d) + this.props.space
      ))
      .on("tick", () => {
        if (this.mounted) {
          this.setState({ 
            ...this.state,
            data 
          });
        }
      });
  };

  renderBubbles = data => {
    const circles = _.map(data, (item, index) => {
      return (
        <Bubble
          hover={this.isHovered(item)}
          key={this.getID(item)}
          id={this.getID(item)}
          title={this.getTitle(item)}
          r={this.getRadius(item)}
          cx={item.x}
          cy={item.y}
          fill={`url(#${this.getImgID(item)})`}
          onMouseEnter={this.getOnMouseEnter(item)}
          onMouseLeave={this.getOnMouseLeave(item)}
          onClick={this.getOnClickBubble(item)}
          topic={this.getTopic(item)}
          topicColor={this.getTopicColor(item)}
          />
      )
    })

    const definitions = (
      <defs>
        {
          _.map(data, (item, index) => {
            return (
              <pattern
                key={this.getImgID(item)}
                id={this.getImgID(item)}
                height={1}
                width={1}
                patternContentUnits="objectBoundingBox"
              >
                <image
                  height={1}
                  width={1}
                  style={{objectFit: "cover"}}
                  preserveAspectRatio={"xMidYMid slice"}
                  xlinkHref={this.getThumbnailUrl(item)}
                  />
              </pattern>
            )
          }
        )}
      </defs>
    )

    return (
      <g transform={`translate(${this.props.width / 2},${this.props.height / 2})`}>
        {definitions}
        {circles}
      </g>
    )
  }

  render() {
    if (this.state.data.length) {
      return (
        <div className="bubbles-bubbles">
          <svg id="bubble-chart" width={this.props.width} height={this.props.height}>
            {this.renderBubbles(this.state.data)}
          </svg>
        </div>
      );
    }

    return <div>Loading</div>;
  }
}

export default Bubbles;
