package com.lucifer.model;

/**
 * Created by liufx on 17/4/5.
 */
public class Question {

    private Long id;

    private String title;

    private String imgUrl;

    private String right_key;

    private Integer score;

    private String A;

    private String B;

    private String C;

    private Float top;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getRight_key() {
        return right_key;
    }

    public void setRight_key(String right_key) {
        this.right_key = right_key;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getA() {
        return A;
    }

    public void setA(String a) {
        A = a;
    }

    public String getB() {
        return B;
    }

    public void setB(String b) {
        B = b;
    }

    public String getC() {
        return C;
    }

    public void setC(String c) {
        C = c;
    }

    public Float getTop() {
        return top;
    }

    public void setTop(Float top) {
        this.top = top;
    }
}
