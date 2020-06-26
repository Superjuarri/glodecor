import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useForm, ErrorMessage } from "react-hook-form"

import updateAction from "../state/updateAction"

import { GlobalStyle } from "../styles/GlobalStyle"

import { Layout } from "../components/Layout"

const minWidth = "900px"

const Wrapper = styled.div`
  position: relative;

  height: inherit;
  background-color: var(--light-biege);
`

const Container = styled.div`
  min-height: 100%;

  position: relative;
  margin: 0 auto;

  width: var(--width);
  max-width: var(--max-width);
`

const Form = styled.form`
  margin: 2rem auto;
  padding: 5rem;

  max-width: 800px;

  background-color: var(--biege);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  border-radius: calc(1rem / 2);
`

const StepWrapper = styled.div`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: space-between;
`

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: var(--gray);
  margin-bottom: 0.5rem;
`

const Input = styled.input``

const Button = styled.button`
  /* max-width: 200px; */
  padding: 1.25em 4em;
  align-self: end;

  background: var(--pink);
  color: var(--light-biege);
  font-weight: bold;

  display: flex;
  justify-content: center;

  border-radius: 0.5em;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: var(--light-pink);
  }

  @media (min-width: ${minWidth}) {
    width: 12em;
    padding: 1em 2em;
  }
`

const FormStep = ({ heading, steps, register, errors }) => {
  return (
    <div>
      <h4>{heading}</h4>
      <StepWrapper>
        {steps.map((step, i) => (
          <InputWrapper key={i}>
            <Label>{step.label}</Label>

            {step.checkboxes ? (
              <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                {step.checkboxes.map((box, i) => (
                  <div key={i}>
                    <span style={{ color: "var(--gray)" }}>{box}</span>
                    <Input
                      style={{ marginLeft: "1rem" }}
                      name={step.label}
                      type="checkbox"
                      ref={register}
                      value={box}
                    ></Input>
                    <ErrorMessage errors={errors} name={step.label} />
                  </div>
                ))}
                <Label style={{ marginTop: "1rem" }} name="otherDecorTypes">
                  Other Decor Types
                </Label>
                <Input
                  name="otherDecorTypes"
                  type="text"
                  required={false}
                  ref={register}
                ></Input>
                <ErrorMessage errors={errors} name="otherDecorTypes" />
              </div>
            ) : step.radios ? (
              <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                {step.radios.map((box, i) => (
                  <div key={i}>
                    <span style={{ color: "var(--gray)" }}>{box}</span>
                    <Input
                      style={{ marginLeft: "1rem" }}
                      name={step.label}
                      type="radio"
                      ref={register}
                      value={box}
                    ></Input>
                    <ErrorMessage errors={errors} name={step.label} />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <Input
                  name={step.label}
                  type={step.type}
                  required={true}
                  placeholder={step.placeholder}
                  ref={register}
                ></Input>
                <ErrorMessage errors={errors} name={step.label} />
              </>
            )}
          </InputWrapper>
        ))}
      </StepWrapper>
    </div>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const IndexPage = () => {
  const steps = [
    [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        placeholder: "John Doe",
      },
      {
        name: "phone",
        type: "text",
        label: "Phone Number",
        placeholder: "(751) 723-5656",
      },
      {
        name: "email",
        type: "text",
        label: "Email Address",
        placeholder: "almathereza@gmail.com",
      },
    ],
    [
      {
        name: "eventName",
        type: "text",
        label: "Event Name",
        placeholder: "Birthday Party",
      },
      { name: "eventDate", type: "date", label: "Event Date" },
      { name: "eventTime", type: "time", label: "Event Time" },
      {
        name: "eventAddress",
        type: "text",
        label: "Event Address",
        placeholder: "12345 Meadows Ridge, Menifee, CA 92584",
      },
    ],
    [
      {
        name: "eventType",
        radios: ["Yes", "No"],
        label: "Outside?",
      },
      {
        name: "eventType",
        type: "text",
        label: "Event Type",
        placeholder: "Birthday Party, Wedding, Baptism",
      },
      {
        name: "eventTheme",
        type: "text",
        label: "Event Theme",
        placeholder: "Animals, Cowboys, etc...",
      },
      {
        name: "eventColors",
        type: "text",
        label: "Event Colors",
        placeholder: "Blue, Red, Yellow",
      },
      {
        name: "decorType",
        label: "Decor Types",
        checkboxes: ["Arch", "Column", "Centerpieces"],
      },
      {
        name: "priceRange",
        type: "text",
        label: "Price Range",
        placeholder: "$50 - $150",
      },
    ],
  ]

  const { register, errors, handleSubmit, reset } = useForm()

  const onSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...e }),
    })
      .then(() => {
        alert("Success!")
        reset()
      })
      .catch(error => alert(error))
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <Container>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h2 style={{ color: "var(--pink)" }}>Free Consultation</h2>
              <FormStep
                register={register}
                errors={errors}
                heading={"Personal Information"}
                steps={steps[0]}
              />
              <FormStep
                register={register}
                errors={errors}
                heading={"Event Information"}
                steps={steps[1]}
              />
              <FormStep
                register={register}
                errors={errors}
                heading={"Event Decorations"}
                steps={steps[2]}
              />

              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default IndexPage
