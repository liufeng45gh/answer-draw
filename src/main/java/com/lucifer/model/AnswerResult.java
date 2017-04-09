package com.lucifer.model;

/**
 * Created by Administrator on 2017/4/9.
 */
public class AnswerResult {

    private String token;

    private String content;

    private Integer score;

    private Integer rightCount;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getRightCount() {
        return rightCount;
    }

    public void setRightCount(Integer rightCount) {
        this.rightCount = rightCount;
    }
}
