package com.techelevator.model.dto;

public class GiftCard {
    private int id;
    private String cardName;

    public GiftCard(int id, String cardName) {
        this.id = id;
        this.cardName = cardName;
    }

    public GiftCard() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    @Override
    public String toString() {
        return "CardDesign{" +
                "id=" + id +
                ", cardName='" + cardName + '\'' +
                '}';
    }
}
